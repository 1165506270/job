import React from 'react'
import {connect} from 'react-redux'
import Layout from '../components/layout'


class Index extends React.Component {
   
  
    componentDidMount () {
    //   this.timer = startClock(dispatch)
    }
  
    componentWillUnmount () {
    //   clearInterval(this.timer)
    }
  
    render () {
    console.log(this)
      return (
        <Layout>
            <p>{this.props.lastUpdate}</p>
            <p>{this.props.user}</p>
        </Layout>
      )
    }
  }
  
  export default connect(state => state.user)(Index)
