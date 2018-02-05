import React, {Component} from 'react';
import Header from 'component/Header/Header'
import {increment, decrement, reset} from 'actions/counter';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                当前计数：{this.props.counter.count}<br/>
                <button onClick={() => this.props.increment()}>+1</button>
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