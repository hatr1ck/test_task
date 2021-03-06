import React, {PureComponent} from 'react';
import '../styles/ticker.scss';

class Ticker extends PureComponent {
    render() {
        return (
            <div className="tickers">
                <span className="ticker">{this.props.ticker}</span>
                <span className="exchange">{this.props.exchange}</span>
                <span className="price">{this.props.price}</span>
                {this.props.change[0] === '-' ?
                <span className="changeNeg">{this.props.change}</span>
                :
                <span className="changePos">{this.props.change}</span>
                }
                <span className="change_percent">{this.props.change_percent}</span>
                <span className="last_trade_time">{this.props.last_trade_time}</span>
                <span className="spanidend">{this.props.spanidend}</span>
                <span className="yield">{this.props.yield}</span>
            </div>
        );
    }
}

export default Ticker;
