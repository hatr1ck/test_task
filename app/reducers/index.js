import {combineReducers} from 'redux';

const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case 'SOCKET_SUCCESS_RESPONSE':
            return {...state, [action.payload.symbol.toLowerCase()]: action.payload.data};
        default:
            return state;
    }
};
const updateInterval = (state = 10000, action) => {
    switch (action.type) {
        case 'CHANGE_INTERVAL':
            return action.payload;
        default:
            return state;
    }
};

const reducers = combineReducers({
    stockTicker,
    updateInterval
});

export default reducers;
