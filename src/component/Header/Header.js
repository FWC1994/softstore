import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Menu,Icon,Avatar,Popover} from 'antd'
import styles from "./Header.css";
import {Link} from 'react-router-dom';
import {changeKeyword,changeMenu} from 'actions/appState';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
class Header extends Component{
    handleClick = (e) => {
        this.props.changeMenu(e.key)
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
                            selectedKeys={[this.props.appState.menuKey]}
                            mode="horizontal"
                            theme="light"
                        >
                            <Menu.Item key="index">
                                <Icon type="home" />
                                <Link className={styles.header_a} to={{ pathname: '/softseek'}}>
                                    首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="search">
                                <Icon type="search" />
                                <Link className={styles.header_a} to={{ pathname: '/softseek/search-page',
                                                                        state:{keyword:''}}}>
                                搜索
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className={styles.login}>
                        {/* <Popover placement="bottomRight" title={text} content={content} trigger="click">
                            <Avatar style={{ backgroundColor:'#f56a00', verticalAlign: 'middle',cursor:'pointer' }} size="large">
                                {"feng"}
                            </Avatar>
                        </Popover> */}
                        
                    </div>
                </div>
                
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        appState: state.appState
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeMenu: (key) => {
           dispatch(changeMenu(key))
        },
        changeKeyword: (keyword) => {
            dispatch(changeKeyword(keyword))
         }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

