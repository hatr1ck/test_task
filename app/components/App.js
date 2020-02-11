import '../styles/application.scss';
import {connect} from '../services';
import React from 'react';

// The below line is here as an example of getting prices
connect('AAPLEddfff');

const App = () => {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>


            </div>
        );
}

export default App;
