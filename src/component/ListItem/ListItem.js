import React,{Component} from 'react'
import {Modal}from 'antd'
import styles from "./ListItem.css";
export default class ListItem extends Component{
    render(){
        return(
            <div className={styles.wrapper} >
                <span className={styles.title} onClick={(e)=>this.props.clickHandle(e)}>{this.props.data.name}</span>
                <span className={styles.abstract}>{this.props.data.abstract}</span>
                <div className={styles.detail}>
                    <ul>
                        <li><span className={styles.detail_tile}>下载次数：</span><span>{this.props.data.downloadTimes}</span> </li>
                        <li><span className={styles.detail_tile}>资源大小：</span><span>{this.props.data.size}MB</span> </li>
                        <li><span className={styles.detail_tile}>上传时间：</span><span>{this.props.data.uploadTime}</span> </li>
                    </ul>
                </div>
                
            </div>
        )
        
    }
}

