import Head from 'next/head'

const layoutStyle = {
    width: '100%',
    height: '1000px',
    background: '#00d7c6'
}
const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <link rel='stylesheet' href='/static/antd.min.css' />
    </Head>
    {props.children}
  </div>
)

export default Layout