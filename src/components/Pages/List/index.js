import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import { selectCar } from '../../../store/cars/actions';
import Item from './Item';

class PageList extends Component {
    render() {
        const { cars, selectCar } = this.props;

        return (
            <ul className="pages">
                { cars.map(car => <Item key={car.id} car={car} selectCar={selectCar}/>) }
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectCar }, dispatch);

const mapStateToProps = state => ({ cars: state.cars.list });

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
