import React, {Component} from 'react';
import SiteDsc from 'component/SiteDsc/SiteDsc'
import { Input } from 'antd';
import {increment, decrement, reset} from 'actions/counter';
import {connect} from 'react-redux';
import styles from './Home.css'
const Search = Input.Search;
class Home extends Component {
    render() {
        return (
            <div>
                <SiteDsc/>
                <div className={styles.search_wrapper}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        size="large"
                    />     
                </div>   
                  
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