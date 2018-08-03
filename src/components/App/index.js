import React, {Component} from 'react';

import Menu from '../Menu';
import Search from '../Search';
import Pages from '../Pages';

import '../../assets/fonts';
import '../../assets/styles/Shared.css';
import './style.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="principal">
                    <Search/>
                    <div className="img">
                        <Pages/>
                    </div>
                </div>
            </div>
        );
    }
}
