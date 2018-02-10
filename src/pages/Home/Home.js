import React, {Component} from 'react';
import TypeCard from 'component/TypeCard/TypeCard'
import SiteDsc from 'component/SiteDsc/SiteDsc'
import { Input,Tabs  } from 'antd';
import {increment, decrement, reset} from 'actions/counter';
import {connect} from 'react-redux';
import styles from './Home.css'
const Search = Input.Search;
const TabPane = Tabs.TabPane;
class Home extends Component {
    callback(key) {
        console.log(key);
    }
    render() {
        return (
            <div>
                <SiteDsc/>
                <div className={styles.search_wrapper}>
                    <Search
                        placeholder="input search keyword"
                        onSearch={value => console.log(value)}
                        enterButton="搜索软件"
                        size="large"
                    />     
                </div>
  
                <TypeCard/>
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);