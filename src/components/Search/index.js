import React from 'react';

import './style.css';

export default props => (
    <div className="search"> 
        <input className="input-search" placeholder="Pesquise por um veículo" type="text" name="name" />
        <button className="btn-new">Cadastrar</button>
    </div>
)