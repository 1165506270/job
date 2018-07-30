import {connect} from 'react-redux'
import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Layout from '../components/usercenterLayout'
import {loginfn} from '../store/user.redux'

const FormItem = Form.Item;
class Demo extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let {userName: user, password: pwd} = values;
                this.props.loginfn({user, pwd})
            console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        console.log(this)
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit}>
                        <h3>登录</h3>
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        或者 <a href="">注册</a>
                        </FormItem>
                    </Form>
                </div>
                <style jsx>{`
                        .login-form {
                            width: 410px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            background: #fff;
                            padding: 35px 43px 0;
                            border-radius: 8px;
                            box-shadow: 1px 2px 15px rgba(0,0,0,.3);
                        }
                        h3{
                            font-weight: 400;
                            font-size: 26px;
                            line-height: 32px;
                            color: #5dd5c8;
                            position: relative;
                            text-align: center;
                        }
                        .login-form .login-form-forgot {
                            float: right;
                        }
                        :global(.login-form-button) {
                            width: 100%;
                            height: 35px;
                        }
                `}</style>
            </Layout>
        );
    }
}
const WrappedNormalLoginForm = connect(state => state.user, {loginfn})(Demo)
export default Form.create()(WrappedNormalLoginForm);
// export default () => {
//     return (
//         <Layout>
//             <ul>
//                 <PostLink id="HelloNext.js" title="Hello Next.js"/>
//                 <PostLink id="LearnNext.js is awesome" title="Learn Next.js is awesome"/>
//                 <PostLink id="DeployappswithZeit" title="Deploy apps with Zeit"/>
//             </ul>
//         </Layout>
//     )
// }