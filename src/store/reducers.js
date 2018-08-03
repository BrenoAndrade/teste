import { combineReducers } from 'redux';

import carsReducer from '../store/cars/reducer';

export default combineReducers({ 
    cars: carsReducer 
})
