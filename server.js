const next = require('next')
const Koa = require('koa')
const router = require('koa-router')()
const proxy = require('koa-proxies')
const LRUCache = require('lru-cache')
const port = parseInt(process.env.PORT, 10) || 8868
const dev = process.env.NODE_ENV !== 'production'
const test = process.env.NODE_TEST === 'test'
const app = next({ dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(ctx) { return ctx.url }

function renderAndCache(ctx, pagePath, noCache, queryParams = null) {
  if (dev || test) ssrCache.reset()
  if (noCache === 'noCache') {
    return app.renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
      .then((html) => {
        // Let's cache this page
        console.info('no cache')
        ctx.body = html
      })
      .catch((err) => {
        console.info('ERRR', err)
        return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
      })
  }

  const key = getCacheKey(ctx.req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.info(`CACHE HIT: ${key}`)
    ctx.body = ssrCache.get(key)
    return Promise.resolve()
  }

  // If not let's render the page into HTML
  return app.render(ctx.req, ctx.res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.info(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)
      ctx.body = html
    })
    .catch((err) => {
      console.info('ERRR', err)
      return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams)
    })
}
app.prepare()
  .then(() => {
    const server = new Koa()
    
    router.get('/index', ctx => renderAndCache(ctx, '/index'))
    router.get('/p/:id', ctx => {
        const actualPage = '/post'
        const queryParams = { title: ctx.params.id}
        return renderAndCache(ctx, actualPage, null, queryParams)
    })
    router.get('/jobDetail/:id', ctx => {
      const actualPage = '/jobDetail'
      const queryParams = { id: ctx.params.id}
      return renderAndCache(ctx, actualPage, null, queryParams)
  })
    server.use(proxy('/api', {
      target: 'http://127.0.0.1:7001/',    
      changeOrigin: true,
      rewrite: path => {
        let con = path.replace(/^\/api/, '')
        console.log(con)
        return con
      },
      logs: true
    }));
    server.use(router.routes());
    server.use(router.allowedMethods());
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })
    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })
    
    server.listen(port, (err) => {
      if (err) throw err
      console.info(`> Ready on http://localhost:${port}`)
    })
  })