import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item';

import './style.css';

class PageList extends Component {
    render() {
        const { cars } = this.props;
        return (
            <ul>
                { cars.map(car => <Item key={car.id} car={car} />) }
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    cars: state.cars.list
})

export default connect(mapStateToProps)(PageList);
