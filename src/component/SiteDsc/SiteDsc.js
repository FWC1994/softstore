import React,{Component} from 'react'
import styles from "./SiteDsc.css";
import {Link} from 'react-router-dom';
export default class SiteDsc extends Component{    
    render(){
        return(
            <div className={styles.wrapper} >
               <div className={styles.logo}></div>
               <div className={styles.desc}><p></p></div>
            </div>
        )
        
    }
}

