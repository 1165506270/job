import Link from 'next/link'
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;
// const linkStyle = {
//     marginRight: 15
//   }
const MyHeader = () => {
    return (
      <Header>
        <div className="inner home-inner">
        <div className="fl" style={{width: 500}}>
          <div className="logo">LOGO</div>
            <Menu
              theme="dark"
              mode="horizontal"
              
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">求职</Menu.Item>
              <Menu.Item key="3">消息</Menu.Item>
            </Menu>
        </div>
          <div className="fr">
            <Link><a className="zhaopin" style={{marginRight: 15}}>肖泽涛</a></Link>
            <div className="touxiang">肖</div>
            
            {/*<Button style={{marginRight: 15}}>注册</Button>
            <Button style={{marginRight: 15}}>登录</Button> */}
            
          </div>
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
            .zhaopin{
              font-size: 16px;
              line-height: 64px;
              color: #fff;
            }
            .zhaopin:hover{
              color: #00d7c6
            }
            .touxiang{
              display: inline-block;
              width: 40px;
              height: 40px;
              font-size: 20px;
              line-height: 40px;
              background: green;
              margin-top: 12px;
              border-radius: 25px;
              text-align: center;
              font-weight: 500;
              color: #fff;
            }
      `}</style>
    </Header>
    )
}
export default MyHeader