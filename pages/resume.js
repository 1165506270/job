import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio, DatePicker } from 'antd';
import Layout from '../components/layout'
import {applyStatus, education} from '../static/commonDictionary'

const { MonthPicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
class Resume extends React.Component {
    
    render () {
    console.log(this)
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
        labelCol: {
          xs: { span: 5 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 18 },
          sm: { span: 18 },
        },
      };
      return (
        <Layout>
          <div className="main">
            <Form className="form-resume">
                <h3 class="title">编辑个人信息</h3>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="真实姓名"
                        >
                        {getFieldDecorator('name', {
                            rules: [ {
                            required: true, message: '请输入姓名',
                            }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="邮箱"
                        >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '请输入正确的邮箱格式',
                              }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="工作状态"
                        >
                        {getFieldDecorator('jobStatus', {
                            rules: [ {
                            required: true, message: '请输入姓名',
                            }],
                        })(
                            <Select>
                                {applyStatus.map(item => (
                                    <Option key={item.value} value={item.value}>{item.lable}</Option>
                                ))}
                            </Select>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="性别"
                        >
                        {getFieldDecorator('sex')(
                            <RadioGroup>
                                <Radio value={0}>男</Radio>
                                <Radio value={1}>女</Radio>
                            </RadioGroup>
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="手机号码"
                        >
                        {getFieldDecorator('telephone', {
                            rules: [ {
                            required: true, message: '请输入手机号码',
                            }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="期望工作地"
                        >
                        {getFieldDecorator('address')(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="生日"
                        >
                        {getFieldDecorator('birthday')(
                            <MonthPicker  placeholder="请选择出生月份"/>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="期望工资"
                        >
                        {getFieldDecorator('wages')(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="学历"
                        >
                        {getFieldDecorator('education')(
                            <Select>
                                {education.slice(1,8).map(item => (
                                    <Option key={item.value} value={item.value}>{item.lable}</Option>
                                ))}
                            </Select>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="信息是否开放"
                        >
                        {getFieldDecorator('hide')(
                            <RadioGroup>
                                <Radio value={0}>是</Radio>
                                <Radio value={1}>否</Radio>
                            </RadioGroup>
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                label="自我描述"
                >
                {getFieldDecorator('description')(
                    <Input.TextArea  autosize={{minRows: 8, maxRows: 20}}/>
                )}
                </FormItem>
                <FormItem>
                <Button type="primary" htmlType="submit">保存</Button>
                </FormItem>
            </Form>
          </div>
          <style jsx>{`
            .main{
                width: 1000px;
                margin: 0 auto;
                margin-top: 10px;
                padding: 28px;
                background-color: #fff;
            }
            .form-resume .title {
                border: 0;
                font-size: 16px;
                font-weight: 700;
                padding: 20px 0 19px 13px;
            }
          `}</style>
        </Layout>
      )
    }
  }
const WrappedNormalResumeForm = connect(state => state.user)(Resume)
export default Form.create()(WrappedNormalResumeForm);
