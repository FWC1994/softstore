import React,{Component} from 'react'
import {Menu,Icon,Avatar,Popover} from 'antd'
import styles from "./Header.css";
import {Link} from 'react-router-dom';
export default class Header extends Component{
    state = {
        current: 'mail',
      }
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    render(){
        return(
            <div className={styles.header} >
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        logo
                    </div>
                    <div className={styles.menu}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            theme="dark"
                        >
                            <Menu.Item key="index">
                                <Icon type="mail" />首页
                            </Menu.Item>
                            <Menu.Item key="page1" disabled>
                                <Icon type="appstore" />page1
                            </Menu.Item>
                            <Menu.Item key="page2">
                                <Icon type="appstore" />page2
                            </Menu.Item>
                            <Menu.Item key="page3">
                                page3
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className={styles.login}>
                        <Avatar style={{ backgroundColor:'#f56a00', verticalAlign: 'middle' }} size="large">
                            {"feng"}
                        </Avatar>
                    </div>
                </div>
                
            </div>
        )
        
    }
}

