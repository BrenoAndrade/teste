import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeInputSearch } from '../../store/cars/actions';

import './style.css';

const Search = props => (
    <div className="search"> 
        <input 
            className="input-search" 
            placeholder="Pesquise por um veículo" 
            type="text" 
            onChange={e => props.changeInputSearch(e.target.value)}
        />
        <button className="btn-new">Cadastrar</button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ changeInputSearch }, dispatch);

export default connect(null, mapDispatchToProps)(Search);