import axios from 'axios'
import Layout from '../components/layout.js'
import { Tag, Button } from 'antd';
const Post =  (props) => (
    <Layout>
       <div className="main-top">
        <div className="main-top-inner">
            <p>发布时间: {'2018-07-03'}</p>
            <h3>{'前端开发工程师'} <Tag color="#f50">15K-20K</Tag></h3>
            <p>工作地点: {'广东省广州市天河区'}</p>
            <p>工作经验: {'二至五年'}</p>
            <p>学历: {'本科'}</p>
        </div>    
       </div>
       <div className="main">
            <div className="main-inner">
                <div className="clearfix">
                        <h2 className="name fl">许翔<i class="icon-vip"></i></h2>
                        <Button className="fr" size="large">立即沟通</Button>
                </div>
                <div className="detail-content">
                    
                    <div className="job-sec">
                        <h3>职位: Unreal4客户端程序</h3>
                        <h3>职位描述:</h3>
                        <div className="text">
                        1. UE4中逻辑功能实现，进行客户端核心模块开发，框架搭建以及后续功能开发<br />2. 负责相关美术，策划协同工作，熟练运用引擎蓝图系统以及逻辑状态机<br />3. 配合TA编写游戏内Shader，进行客户端优化<br />任职要求:<br />1.两年以上行业udk,ue3,ue4端游，重度手游程序C++开发经验<br />2.熟悉UE4引擎及蓝图功能和渲染管线基本原理<br />3.客户端底层架构数据，逻辑，UI架构经验者优先<br />4.计算机相关专业，数学基础扎实，具备良好的数据结构算法基础<br />5. 熟练阅读英语技术文档，具有规范编程习惯和文档编写能力
                        </div>
                    </div>
                </div>
                <div  className="job-sec">
                    <h3>公司描述:</h3>
                    <div className="text">
                        标新立异，研精致思
                    </div>
                </div> 
            </div>
        </div>
       <style jsx>{`
        .main-top{
            background: #444c60;
            height: 220px;
            color: #fff;
            padding: 15px;
        }
        .main-top-inner{
            width: 1000px;
            margin: 0 auto
        }
        .main-top h3{
            font-size: 24px;
            display: inline-block;
            font-weight: 400;
            margin-right: 10px;
            line-height: 35px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 400px;
            color: #fff;
        }
        .main{
            background:#fff;
        }
        .main-inner{
            width: 1000px;
            margin: 0 auto;
            padding-top: 20px;
        }
        .job-sec .text {
            color: #61687c;
            line-height: 36px;
        }
       `}</style>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  console.log(`Fetched show: ${id}`)
  return { id }
}

export default Post