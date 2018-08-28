import React from 'react'
import { Row, Col,List, Avatar, Badge,Input, Button, Card, Popover } from 'antd';
import Layout from '../components/layout'
const emojis = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾'
const data = [
    {
      title: '海闻科技',
      
    },
    {
      title: '前海易物',
      active: true,
    },
    {
      title: '考拉海购',
    },
    {
      title: '畔游',
    },
  ];
  const chatData = [
    {
      title: '肖泽涛',
      content: '你好😀',
    },
    {
      title: '前海易物',
      content: '你好',
    },
  ];
class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: [],
            showEmoji: false
        }
    }
    render() {
        const emojis = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤔 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 😬 😰 😱 😳 😵 😡 😠 😷 🤒 🤕 🤢 🤧 😇 🤠 🤡 🤥 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾'
                        .split(' ')
                        .filter(v => v)
                        .map(v => ({text: v}))
        
        return (
            <Layout>
                <div className="main">
                    <Row style={{height: '100%'}}>
                        <Col span="7" style={{height: '100%'}} >
                            <div className="left">
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                        <List.Item style={{paddingLeft: 15, paddingRight: 15, background: item.active ? '#f2f5fa' : '#fff'}}> 
                                            <List.Item.Meta
                                            avatar={ <Avatar size={64} icon="user" />}
                                            title={<a>{item.title}</a>}
                                            />
                                            {
                                                !item.active ?  <Badge count={item.title.length} /> : ''
                                            }
                                            
                                        </List.Item>
                                )}
                            />
                            </div>
                        </Col>
                        <Col span="17" style={{height: '100%'}} >
                            <div className="chat-title">
                                <h3>前海易物</h3>
                            </div>
                            <div className="chat-content">
                            <List
                                dataSource={chatData}
                                renderItem={item => (
                                    <List.Item style={{paddingLeft: 15, paddingRight: 15, background: item.active ? '#f2f5fa' : '#fff'}}> 
                                        <List.Item.Meta
                                        avatar={ <Avatar size={64} icon="user" />}
                                        title={<a>{item.title}</a>}
                                        description={item.content}
                                        />

                                        
                                    </List.Item>
                                )}
                            />
                            </div>
                            <div className="chat-from">
                                <Input.TextArea  autosize={{minRows: 5, maxRows: 5}}/>
                                <div>
                                    
                                    <Button className="fr">发送</Button>
                                    <Popover content={(
                                        <List
                                        style={{width: 300, height:300}}
                                        grid={{ gutter: 0, xs: 10, sm: 10, md:10, lg: 10, xl: 10, xxl: 10 }}
                                        dataSource={emojis}
                                        renderItem={item => (
                                          <List.Item>
                                            <span className="emoji">{item.text}</span>
                                          </List.Item>
                                        )}
                                      />

                                    )}>
                                       <span
                                        className="fr"
                                        style = {{marginRight: 15,marginTop: 7, height: 24, display: 'line-block'}}
                                        >😀</span>
                                    </Popover>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <style jsx>{`
                    .main{
                        width: 1000px;
                        margin: 0 auto;
                        margin-top: 10px;
                        height: 700px;
                        background-color: #fff;
                    }
                    .left{
                        border-right: 2px solid #eef0f5;
                        height: 100%;
                        overflow-y: auto; 
                    }
                    .active{
                        background-color: #f2f5fa;
                    }
                    .chat-title{
                        height: 50px;
                        padding-left: 5px;
                        border-bottom:2px solid #eef0f5;
                        line-height: 50px;
                    }
                    .chat-content{
                        height: 500px;
                        padding-left: 5px;
                        border-bottom:2px solid #eef0f5;
                        line-height: 50px;
                    }
                    .emoji{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        cursor: pointer;
                        text-align: center;
                    }
                    .emoji:hover{

                        background: #eee;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Chat