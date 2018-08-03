import * as types from './types';

const INITIAL_STATE = {
    list: [],
    input: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CHANGE_INPUT_SEARCH: return { ...state, input: action.payload }
        case types.SEARCH: return { ...state, list: action.payload }
        default: return state
    }
}
