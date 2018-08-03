import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../store/cars/actions';

import './style.css';

import Action from './Action';

class PageDetails extends Component {
    componentWillMount() {
        this.props.getBrands();
    }

    render() {
        const { car, brands } = this.props;
        const { setBrand, setColor, setKm, setModel, setPrice, setTitle, setYear } = this.props;

        return (
            <form className="detail-form pages">
                <input 
                    readOnly={false}
                    placeholder="Título"  
                    type="text" 
                    className="detail-input detail-full" 
                    value={car.title || ''}
                    onChange={e => setTitle(e.target.value)}/>
                <div className="detail-div-half">
                    <input 
                        readOnly={false}
                        placeholder="Modelo" 
                        type="text" 
                        className="detail-input detail-half" 
                        value={car.model || ''}
                        onChange={e => setModel(e.target.value)}/>
                    <input 
                        readOnly={false}
                        placeholder="Ano" 
                        type="text" 
                        className="detail-input defailt-half" 
                        value={car.year || ''}
                        onChange={e => setYear(e.target.value)}/>
                </div>
                <select className="detail-input" onChange={e => setBrand(e.target.value)} readOnly={false}>
                    { brands.map(brand => <option selected={brand.name == car.brand} value={brand.name}>{brand.name}</option>) }
                </select>
                <div className="detail-div-half">
                    <input
                        readOnly={false} 
                        placeholder="Cor" 
                        type="text" 
                        className="detail-input detail-half" 
                        value={car.color || ''}
                        onChange={e => setColor(e.target.value)}/>
                    <input 
                        readOnly={false}
                        placeholder="Preço" 
                        type="text" 
                        className="detail-input defailt-half" 
                        value={car.price || ''}
                        onChange={e => setPrice(e.target.value)}/>
                </div>
                <input 
                    readOnly={false}
                    placeholder="KM" 
                    type="text" 
                    className="detail-input defailt-half" 
                    value={car.km || ''}
                    onChange={e => setKm(e.target.value)}/>

                <Action />
            </form>
        );
    }
}

const mapDispatchToProps = dispatch=> bindActionCreators({ ...actions }, dispatch);

const mapStateToProps = state => ({
    car: state.cars.selected || {
        title: '',
        model: '',
        year: '',
        brand: '',
        color: '',
        price: '',
        km: ''
    },
    brands: state.cars.brands
});

export default connect(mapStateToProps, mapDispatchToProps)(PageDetails);
