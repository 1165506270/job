// import Link from 'next/link'
import { Layout, Menu } from 'antd';
const { Header } = Layout;
// const linkStyle = {
//     marginRight: 15
//   }
const MyHeader = () => {
    return (
      <Header>
        <div className="inner home-inner">
          <div className="logo">LOGO</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">求职</Menu.Item>
            <Menu.Item key="3">消息</Menu.Item>
          </Menu>
        </div>
        <style jsx>{`
            .logo {
              width: 120px;
              height: 31px;
              background: rgba(255,255,255,.2);
              margin: 16px 24px 16px 0;
              font-size:28px;
              line-height: 31px;
              text-align: center;
              font-weight: 600;
              float: left;
            }
            .inner {
                width: 1000px;
                margin: 0 auto;
            }
            .home-inner {
                max-width: 1000px;
            }
      `}</style>
    </Header>
    )
}
export default MyHeader