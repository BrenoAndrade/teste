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

        case types.DETAIL_BRAND: return { ...state, selected: { ...state.selected, brand: action.payload }}
        case types.DETAIL_COLOR: return { ...state, selected: { ...state.selected, color: action.payload }}
        case types.DETAIL_KM: return { ...state, selected: { ...state.selected, km: action.payload }}
        case types.DETAIL_MODEL: return { ...state, selected: { ...state.selected, model: action.payload }}
        case types.DETAIL_PRICE: return { ...state, selected: { ...state.selected, price: action.payload }}
        case types.DETAIL_TITLE: return { ...state, selected: { ...state.selected, title: action.payload }}
        case types.DETAIL_YEAR: return { ...state, selected: { ...state.selected, year: action.payload }}

        default: return state;
    }
}
