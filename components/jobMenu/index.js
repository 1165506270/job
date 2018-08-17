import {Icon} from 'antd'
import Link from 'next/link'
const JobMenu = (props) => (
    <ul className="job-menu">
        {
            props.position.map(item => {
                return (<li key={item.code}>
                    <div>
                        {item.subLevelModelList.filter(i=> i.name.length <= 4).slice(0,2).map(i => <span key={i.code}>{i.name}/</span>)}
                        <span>{item.name}</span>
                        <div className="icon-box"><Icon type="right"/></div>
                    </div>
                    <ul className="menu-sub">
                        {
                            item.subLevelModelList.map(i => (
                                <li key={i.code}>
                                    <h4>{i.name}</h4>
                                    <div className="text">
                                        {
                                           i.subLevelModelList.map(a => (
                                               <Link href={`/${a.code}`} key={a.code}>
                                                    <a>{a.name}</a>   
                                               </Link>
                                           ))
                                        }
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </li>)
            })
        }
        <style jsx>
            {`
                .job-menu{
                    width: 250px;
                    background: #fff;
                }
                .job-menu>li{
                    padding: 0 0;
                    zoom: 1;
                    height: 44px;
                    line-height: 26px;
                    cursor: pointer;
                    text-align: center;
                    position: relative;
                }
                .job-menu>li>div{
                    padding: 8px 0 9px 20px;
                    width: 233px;
                }
                .job-menu .icon-box{
                    float: right;
                    widht: 50px;
                }
                .job-menu>li:hover{
                    background: #5cc9b4;
                    color: #fff;
                    border: 1px solid #d1d4db
                }
                .job-menu .menu-sub{
                    width: 600px;
                    border: 1px solid #eee;
                    position: absolute;
                    left: 250px;
                    top: 0px;
                    display: none;
                    background: #fff;
                    z-index: 1000;
                }
                .job-menu li:hover .menu-sub{
                    display: block;
                }
                .menu-sub h4 {
                    float: left;
                    width: 104px;
                    font-size: 13px;
                    padding-top: 2px;
                    text-align: right;
                    font-weight: 400;
                }
                .menu-sub .text {
                    margin-left: 130px;
                    border-bottom: solid 1px #f5f6f9;
                    padding: 0 0 10px 1px;
                    margin-top: 10px
                }
                .menu-sub .text a {
                    display: inline-block;
                    margin-left: 0;
                    margin-right: 25px;
                    color: #9fa3b0;
                }
            `}
        </style>
    </ul>
  )

  export default JobMenu;