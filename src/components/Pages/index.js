import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './Home';
import List from './List';
import Detail from './Detail';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/search" component={List}/>
        <Route path="/details" component={Detail}/>
        <Redirect from="*" to="/" />
    </Router>
)
