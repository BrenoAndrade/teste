import * as types from './types';

const INITIAL_STATE = {
    list: [],
    input: '',
    selected: null,
    brands: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CHANGE_INPUT_SEARCH: return { ...state, input: action.payload, selected: null };
        case types.SEARCH: return { ...state, list: action.payload };
        case types.SEARCH_BRANDS: return { ...state, brands: action.payload };
        case types.SELECT_CAR: return { ...state, selected: action.payload };
        default: return state;
    }
}
