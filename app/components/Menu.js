import React, {PureComponent} from 'react';
import '../styles/tickersMenu.scss';
import {connect} from '../services';
import Button from 'react-bootstrap/Button';
import Dropdown from './Dropdown';

//dummy data

connect('Bitcoin');
connect('TRON');
connect('Ripple');
connect('Dash');
connect('Ethereum');
connect('Tezos');

class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inp: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.createTicker = this.createTicker.bind(this);
    }
    handleInput(e) {
        this.setState({inp: e.target.value});
    }
    createTicker() {
        connect(this.state.inp);
    }
    render() {
        return (
            <div className="tickersMenu">
            <h3 className="title">Stock Blotter</h3>
                <input type="text" className="tickerNameInput" placeholder="Ticker name" onChange={this.handleInput} value={this.state.inp} />
                <Button height="150px" onClick={this.createTicker} variant="outline-light">Create Ticker</Button>
                <Dropdown className="dropdown" />
            </div>
        );
    }
}
export default Menu;
