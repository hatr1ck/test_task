import '../styles/application.scss';
import React from 'react';
import Tickers from './TickerContainer';
import Menu from './Menu';

const App = () => {
    return (
        <div className="stock-ticker">
            <Menu />
            <Tickers/>
        </div>
        );
};

export default App;
