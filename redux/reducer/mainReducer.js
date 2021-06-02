import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productosReducer from './productosReducer';

const mainReducer = combineReducers({
    authReducer,
    productosReducer
})

export default mainReducer;