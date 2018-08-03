import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createCar, deleteCar, updateCar } from '../../../store/cars/actions';
import changeUrl from '../../../lib/changeUrl';

const Action = props => {
    const { car, createCar, deleteCar, updateCar } = props;

    const id = car ? car.id : false;

    return (
        <div>
            <div>
                <button disabled={!id} onClick={() => {
                    deleteCar(id);
                    changeUrl(null, '#/');
                }}>
                    Remover
                </button>
                <button onClick={() => changeUrl(null, '#/')}>Cancelar</button>
            </div>
            <button onClick={() => {
                if(id) updateCar(id, car);
                else createCar(car);

                changeUrl(null, '#/');
            }}>
                Salvar
            </button>
        </div>
    );
}

const mapStateToProps = state => ({ car: state.cars.selected });

const mapDispatchToProps = dispatch => bindActionCreators({ updateCar, createCar, deleteCar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Action);