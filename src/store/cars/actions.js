import axios from 'axios';
import * as types from './types';

export function changeInputSearch(text) {
    return dispatch => {
        if(text != '') {
            dispatch(getCars(text)); 
        }
        
        changeUrl(text);
        dispatch({ type: types.CHANGE_INPUT_SEARCH, payload: text })
    }
}

function getCars(text) {
    return dispatch => {
        axios
            .get('http://tchml.tradersclub.com.br:12000/api/cars?search=' + text)
            .then(res => dispatch({ type: types.SEARCH, payload: res.data.cars }));
    }
}

function changeUrl(text) {
    if(text == '' && window.location.hash != '#/') window.location.href = window.location.origin + '#/';
    if(text != '' && window.location.hash != '#/search') window.location.href = window.location.origin + '#/search';
}