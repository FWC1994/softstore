import React,{Component} from 'react'
import {Menu,Icon,Avatar,Popover} from 'antd'
import styles from "./Header.css";
import {Link} from 'react-router-dom';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
export default class Header extends Component{
    state = {
        current: 'index',
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
                    </div>
                    <div className={styles.menu}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            theme="light"
                        >
                            <Menu.Item key="index">
                                <Icon type="home" />
                                <Link className={styles.header_a} to={{ pathname: '/'}}>
                                    首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="search">
                                <Icon type="search" />
                                <Link className={styles.header_a} to={{ pathname: '/search'}}>
                                搜索
                                </Link>
                            </Menu.Item>
                            {/* <Menu.Item key="page2">
                                <Icon type="appstore" />
                                <Link className={styles.header_a} to={{ pathname: '/mapbox'}}>
                                page2
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="page3">
                                <Icon type="appstore" />
                                <Link className={styles.header_a} to={{ pathname: '/userinfo'}}>
                                page3
                                </Link>
                            </Menu.Item> */}
                        </Menu>
                    </div>
                    <div className={styles.login}>
                        <Popover placement="bottomRight" title={text} content={content} trigger="click">
                            <Avatar style={{ backgroundColor:'#f56a00', verticalAlign: 'middle',cursor:'pointer' }} size="large">
                                {"feng"}
                            </Avatar>
                        </Popover>
                        
                    </div>
                </div>
                
            </div>
        )
        
    }
}

