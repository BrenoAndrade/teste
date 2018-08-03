import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import changeUrl from '../../lib/changeUrl';
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
        <button className="btn-new" onClick={() => changeUrl(null, '#/details')}>Cadastrar</button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ changeInputSearch }, dispatch);

export default connect(null, mapDispatchToProps)(Search);