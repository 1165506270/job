import React from 'react'
import {connect} from 'react-redux'
import {Tabs, Col, Row} from 'antd'
import Layout from '../components/layout'
import {setPosition, setIndustry} from '../store/global.redux'
import JobMenu from '../components/jobMenu'
import SearchInput from '../components/searchInput'
import JobCard from '../components/jobCard'
const TabPane = Tabs.TabPane;
class Index extends React.Component {
    componentDidMount () {
      this.props.setPosition()
      this.props.setIndustry()
    }
  
    componentWillUnmount () {
    //   clearInterval(this.timer)
    }
  
    render () {
    console.log(this)
      return (
        <Layout>
          <div className="fl">
            <JobMenu position = {this.props.position}></JobMenu>
          </div>
          <div className="fr content">
            <SearchInput position = {this.props.position} />
            <Tabs>
              {
                this.props.industry.map(item => (
                  <TabPane tab={item.name} key={item.code}>
                    <Row gutter={16}>
                    {
                      this.props.industry.map((_) => (
                        <Col span={8}>
                          <JobCard />
                        </Col>
                      ))
                    }
                    </Row>
                  </TabPane>
                ))
              }
            </Tabs>
          </div>
            <style jsx>{`
              .content{
                width: calc(100% - 250px);
                padding-top: 20px;
                padding-left: 15px;
              }
            
            `}</style>
        </Layout>
      )
    }
  }
  
  export default connect(state => state.global, {setPosition, setIndustry})(Index)
