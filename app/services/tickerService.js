import io from 'socket.io-client';
let socket = null;
import store from '../index';
const symbols = [];

export const connect = (stockSymbol) => {
    // if statement to filter unnecessary connections
    if(symbols.indexOf(stockSymbol) === -1 && stockSymbol.trim() !== '') {
        symbols.push(stockSymbol);

        socket = io('http://localhost:4000');

        socket.on('connect', () => {
            socket.on(stockSymbol, (data) => {
                // that's kinda hacky, I'll fix it later (never)
                store.dispatch({type: 'SOCKET_SUCCESS_RESPONSE', payload: {symbol: stockSymbol, data: JSON.parse(data)}});
            });

            socket.emit('ticker', stockSymbol);
        });

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    }
};
