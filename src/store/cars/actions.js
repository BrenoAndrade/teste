import axios from 'axios';
import * as types from './types';

import changeUrl from '../../lib/changeUrl';

const apiUrl = 'http://tchml.tradersclub.com.br:12000/api/';

export function setTitle(text) {
    return { type: types.DETAIL_TITLE, payload: text };
}

export function setBrand(text) {
    return { type: types.DETAIL_BRAND, payload: text };
}

export function setColor(text) {
    return { type: types.DETAIL_COLOR, payload: text };
}

export function setKm(text) {
    return { type: types.DETAIL_KM, payload: text };
}

export function setModel(text) {
    return { type: types.DETAIL_MODEL, payload: text };
}

export function setPrice(text) {
    return { type: types.DETAIL_PRICE, payload: text };
}

export function setYear(text) {
    return { type: types.DETAIL_YEAR, payload: text };
}

export function changeInputSearch(text) {
    return dispatch => {
        if(text != '') {
            dispatch(getCars(text)); 
        }
        
        changeUrl(text);
        dispatch({ type: types.CHANGE_INPUT_SEARCH, payload: text });
    }
}

export function selectCar(car) {
    if(car) {
        changeUrl(null, '#/details');
        return { type: types.SELECT_CAR, payload: car };
    }

    return false;
}

export function createCar(car) {
    return dispatch => {
        axios
            .post(`${apiUrl}/cars`, car)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}

function getCars(text) {
    return dispatch => {
        axios
            .get(`${apiUrl}/cars?search=${text}`)
            .then(res => dispatch({ type: types.SEARCH, payload: res.data.cars }))
            .catch(err => console.log(err));
    }
}

export function getBrands() {
    return dispatch => {
        axios
            .get(`${apiUrl}/brands`)
            .then(res => dispatch({ type: types.SEARCH_BRAND, payload: res.data.brands }))
            .catch(err => console.log(err));
    }
}


export function updateCar(id, car) {
    return dispatch => {
        axios
            .put(`${apiUrl}/cars/${id}`, car)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}

export function deleteCar(id) {
    return dispatch => {
        axios
            .delete(`${apiUrl}/cars/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}
