import React,{Component} from 'react'
import {Menu,Icon} from 'antd'
import styles from "./Header.css";
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
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
                <div className={styles.logo}>

                </div>
                <div className={styles.menu}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                    <Icon type="mail" />Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                    <Icon type="appstore" />Navigation Two
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item>
                </Menu>
                </div>
                <div className={styles.login}>

                </div>
            </div>
        )
        
    }
}

