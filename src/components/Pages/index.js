import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './Home';
import List from './List';
import Details from './Details';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/search" component={List}/>
        <Route path="/details" component={Details}/>
        <Redirect from="*" to="/" />
    </Router>
)
