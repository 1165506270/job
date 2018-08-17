import React from 'react'
import {Select, Row, Col} from 'antd'
import {connect} from 'react-redux'
import Layout from '../components/layout'
import InputSearch from '../components/searchInput'
import { years, education} from '../static/commonDictionary'
import JobCard from '../components/jobCard'
import {setPosition, setIndustry} from '../store/global.redux'
import Link from 'next/link'
const Option = Select.Option;
class JobList extends React.Component{
    constructor(props) {
        super(props)
        console.log()
        this.state = {
            text: '',
            jobCode: '',
            industryCode: '',
        }
    }
    componentDidMount () {
        this.props.setPosition()
        this.props.setIndustry()
    }
    render() {
        return (
            <Layout>
                <div className="main-top">
                    <div className="main-top-inner">
                        <InputSearch  position = {this.props.position}/>
                        <Row style={{marginTop: 15}}>
                            <Col span={6}>
                                工作年限： <Select defaultValue={0} style={{width: 120}}>
                                    {
                                        years.map(item => (
                                            <Option value={item.value} key={item.value}>{item.lable}</Option>
                                        ))
                                    }
                                    
                                </Select>
                            </Col>
                            <Col span={6}>
                                学历要求： <Select defaultValue={0}  style={{width: 120}}>
                                    {
                                        education.map(item => (
                                            <Option value={item.value} key={item.value}>{item.lable}</Option>
                                        ))
                                    }
                                    
                                </Select>
                            </Col>
                        </Row>
                    </div> 
                </div>
                <div className="main">
                    {
                        this.props.industry.map(item => (
                            <Row gutter={16}>
                            {
                            this.props.industry.map((item) => (
                                <Col span={8}>
                                    <Link as={`/jobDetail/${item.code}`} href={`/jobDetail?id=${item.code}`}>
                                        <a>
                                            <JobCard />
                                        </a>
                                    </Link>
                                </Col>
                            ))
                            }
                            </Row>
                        ))
                    }
                </div>
                <style jsx>{`
                    .main-top{
                        background:#fff;
                        padding: 15px 5px;
                    }
                    .main-top-inner{
                        width: 1000px;
                        margin: 0 auto
                    }
                    .main{
                        width: 1000px;
                        margin: 0 auto;
                        margin-top: 25px;
                    }
                
                `}</style>
            </Layout>
        )
    }
}
export default connect(state => state.global, {setPosition, setIndustry})(JobList)