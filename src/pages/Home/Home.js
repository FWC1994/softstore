import React, {Component} from 'react';
import TypeCard from 'component/TypeCard/TypeCard'
import SiteDsc from 'component/SiteDsc/SiteDsc'
import { Input,Tabs,message  } from 'antd';
import {changeKeyword,changeMenu} from 'actions/appState';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom"
import styles from './Home.css'
const Search = Input.Search;
const TabPane = Tabs.TabPane;

class Home extends Component {
    searchCallback(value){
        if(value){
            this.props.history.push({
                pathname:"/softseek/search-page",
                state:{keyword:value}
            });
            this.props.changeKeyword(value)
            this.props.changeMenu('search') 
        }else{
            message.info('请输入搜索的关键词！');
        }
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <SiteDsc/>
                <div className={styles.search_wrapper}>
                    <Search
                        placeholder= {"input search keyword"}
                        onSearch={(value) => this.searchCallback(value)}
                        enterButton="搜索软件"
                        size="large"
                    />
                </div>
                {/* <TypeCard/> */}
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appState: state.appState,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeKeyword: (keyword) => {
            dispatch(changeKeyword(keyword))
        },
        changeMenu: (index) => {
            dispatch(changeMenu(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));