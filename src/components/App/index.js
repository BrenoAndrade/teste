import React, {Component} from 'react';

import Menu from '../Menu';
import Search from '../Search';
import Pages from '../Pages';

import '../../assets/fonts';
import '../../assets/styles/Shared.css';
import './style.css';

import img from '../../assets/img/car-wireframe.png';

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="principal">
                    <Search/>
                    <img className="img-car" src={img}/>
                    <Pages />
                </div>
            </div>
        );
    }
}
