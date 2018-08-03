import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createCar, deleteCar, updateCar } from '../../../store/cars/actions';
import changeUrl from '../../../lib/changeUrl';

const Action = props => {
    const { car, createCar, deleteCar, updateCar } = props;

    const id = car ? car.id : false;

    return (
        <div className="row div-btn">
            <div className="row">
                <button className="btn" disabled={!id} onClick={() => {
                    deleteCar(id);
                    changeUrl(null, '#/');
                }}>
                    Remover
                </button>
                <button className="btn" onClick={() => changeUrl(null, '#/')}>Cancelar</button>
            </div>
            <div className="row">
                <button className="btn-new" onClick={() => {
                    if(id) updateCar(id, car);
                    else createCar(car);

                    changeUrl(null, '#/');
                }}>
                    Salvar
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ car: state.cars.selected });

const mapDispatchToProps = dispatch => bindActionCreators({ updateCar, createCar, deleteCar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Action);