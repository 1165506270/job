import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio, DatePicker } from 'antd';
import Layout from '../components/layout'
import {applyStatus, education} from '../static/commonDictionary'
import {setPosition, setIndustry} from '../store/global.redux'
const { MonthPicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
class PostJob extends React.Component {
    componentDidMount () {
        this.props.setPosition()
        this.props.setIndustry()
    }
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
                <h3 class="title">发布招聘信息</h3>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="职位名称"
                        >
                        {getFieldDecorator('jobName', {
                            rules: [ {
                            required: true, message: '请输入职位名称',
                            }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="学历要求"
                        >
                        {getFieldDecorator('education', {
                            rules: [{
                                required: true, message: '请输入学历要求',
                              }],
                        })(
                            <Select>
                                {education.map(item => (
                                    <Option key={item.value} value={item.value}>{item.lable}</Option>
                                ))}
                            </Select>
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={30} >
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="职位类型"
                        >
                        {getFieldDecorator('jobStatus', {
                            rules: [ {
                            required: true, message: '请输入职位类型',
                            }],
                        })(
                            <Cascader placeholder="选择职业"   options={this.props.position} fieldNames={{ label: 'name', value: 'code', children: 'subLevelModelList' }}/>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                        {...formItemLayout}
                        label="月薪"
                        >
                        {getFieldDecorator('wages', {
                            rules: [ {
                            required: true, message: '请输入月薪',
                            }],
                        })(
                            <Input />
                        )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                label="职位描述"
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
const WrappedNormalResumeForm = connect(state => state.global, {setPosition, setIndustry})(PostJob)
export default Form.create()(WrappedNormalResumeForm);
