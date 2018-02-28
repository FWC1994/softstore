import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link,hashHistory} from 'react-router-dom';
import Bundle from './Bundle';
import '../mock/mockdata'
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import SearchPage from 'bundle-loader?lazy&name=searchpage!pages/SearchPage/SearchPage';
import Header from 'component/Header/Header';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router history={hashHistory}>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/softseek" component={createComponent(Home)}/>
                <Route path="/softseek/search-page" component={createComponent(SearchPage)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;