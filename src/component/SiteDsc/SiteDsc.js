import React,{Component} from 'react'
import styles from "./SiteDsc.css";
import {Link} from 'react-router-dom';
export default class SiteDsc extends Component{    
    render(){
        return(
            <div className={styles.wrapper} >
               <h1>用心收集最好的数据</h1>
               <p>GitHub is a development platform inspired by the way you work. 
                   From open source to business, you can host and review code, 
                   manage projects, and build software alongside millions of 
                   other developers.</p>
            </div>
        )
        
    }
}

