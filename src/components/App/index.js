import React, {Component} from 'react';
import Menu from '../Menu';

import '../../assets/styles/Shared.css';

export default class App extends Component {
    render() {
        return (
            <div className="body">
                <Menu />
            </div>
        );
    }
}