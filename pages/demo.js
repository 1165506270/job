import {connect} from 'react-redux'
import React from 'react'
import {Button} from 'antd'
import Layout from '../components/layout'
import {loginfn} from '../store/user.redux'

class Demo extends React.Component {
    render() {
        console.log(this)
        return (
            <Layout>
                <Button onClick= {this.props.loginfn}>提交</Button>  
                <div>{this.props.count}</div>
            </Layout>
        )
    }
}

export default connect(state => state.user, {loginfn})(Demo)
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