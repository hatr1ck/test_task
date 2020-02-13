import '../styles/application.scss';
import {connect} from '../services';
import React, {Component} from 'react';
import Tick from './Tick';
// The below line is here as an example of getting prices
connect('GaS');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inp: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        this.setState({inp: e.target.value});
    }
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <Tick/>
                <input type="text" onChange={this.handleInput} value={this.state.inp} />
            </div>
        );
    }
}

export default App;
