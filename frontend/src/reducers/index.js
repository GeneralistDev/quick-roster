import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const reducers = {
    routing: routerReducer,
    settings: settings,
};

module.exports = combineReducers(reducers);
