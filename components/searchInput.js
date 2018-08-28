import React from 'react'
import {Input, Cascader, Button } from 'antd'
const InputGroup = Input.Group;
class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            jobCode: '',
            industryCode: '',
            fieldNames: {
                label: 'name',
                value: 'code',
                children: 'subLevelModelList' 
            }
        }
    }
    handleTextChange(event) {
        this.setState({text: event.target.value})
    }
    handleJobCodeChange(value) {
        this.setState({jobCode: value[value.length - 1]})
    }
    render() {
        return (
            <InputGroup compact>
                <Input style={{ width: '60%' }} size="large" onChange={this.handleTextChange.bind(this)}/>
                <Cascader placeholder="选择职业" style={{ width: '25%' }} size="large" onChange={this.handleJobCodeChange.bind(this)} options={this.props.position} fieldNames={{ label: 'name', value: 'code', children: 'subLevelModelList' }}/>
                <Button style={{ width: '15%' }} size="large">搜索</Button>
            </InputGroup>
        )
    }
}
export default  SearchInput