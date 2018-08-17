import {Card} from 'antd'
import Link from 'next/link'

const JobCard = (props) => {
    return (
        <Card title="Card title" extra={<span>More</span>} bordered={false} style={{ width: '100%', marginBottom: 10}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}
export default JobCard;


