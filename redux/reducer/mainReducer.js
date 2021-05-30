//importamos el metodo combine reducer
import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import authReducer from './authReducer';
import activityReducer from './activityReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    authReducer,
    activityReducer
})

export default mainReducer;