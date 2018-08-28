import Head from 'next/head'
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import Header from './header'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

const MyLayout = (props) => (
  <Layout>
    <Head>
      <link rel='stylesheet' href='/static/antd.min.css' />
      <link rel='stylesheet' href='/static/base.css' />
    </Head>
    <Header />
    <Content>
      {props.children}
    </Content>
    {/* <Footer style={{ textAlign: 'center' }} className="footer">
      Ant Design ©2018 Created by Ant UED
    </Footer> */}
    <style jsx>{`

            .inner {
                width: 1000px;
                margin: 0 auto;
            }
            .home-inner {
                max-width: 1000px;
                min-height: 600px;
            }
            .footer{position:absolute;bottom:0;width:100%;height:100px;background-color: #ffc0cb;}
      `}</style>
  </Layout>
)

export default MyLayout