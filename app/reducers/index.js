const stockTicker = (state = {}, action) => {
    switch (action.type) {
        case 'SOCKET_SUCCESS_RESPONSE':
            return {...state, [action.payload.symbol.toLowerCase()]: action.payload.data};
        default:
            return state;
    }
};

export default stockTicker;
