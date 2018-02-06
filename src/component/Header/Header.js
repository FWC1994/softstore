import React,{Component} from 'react'
import styles from "./Header.css";
import {Link} from 'react-router-dom';
export default class Header extends Component{
    render(){
        return(
            <div className={styles.header} >
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/userinfo">UserInfo</Link></li>
                </ul>
            </div>
        )
        
    }
}

