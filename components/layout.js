import Head from 'next/head'
// import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <link rel='stylesheet' href='/static/antd.min.css' />
    </Head>
    {/* <Header /> */}
    {props.children}
  </div>
)

export default Layout