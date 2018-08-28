import {Card} from 'antd'
import Link from 'next/link'

const JobCard = (props) => {
    return (
        <Card title="前端开发工程师" extra={<span>15K-20K</span>} bordered={false} style={{ width: '100%', marginBottom: 10}}>
            <div className="fl" style={{width: 100}}>
                <p>地址： 上海</p>
                <p>年限：5-10年</p>
                <p>学历：本科</p>
            </div>
            <div className="fr company">
                <h3>海闻 {props.id}</h3>
            </div>
            <style jsx>{`
                .company{
                    height: 83px;
                    width: 70px;
                    background: #00d7c6;
                    
                }
                .company h3{
                    color: #fff;
                    text-align: center;
                    line-height: 83px;
                }
            `}</style>
        </Card>
    )
}
export default JobCard;


