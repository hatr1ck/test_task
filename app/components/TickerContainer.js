import {connect} from 'react-redux';
import React, {PureComponent} from 'react';
import Ticker from './Ticker';
import '../styles/tickersMenu.scss';

class Tick extends PureComponent {
    render() {
        return (
            <div className="tickersContainer">
                <Ticker ticker={"name"} exchange={"exchange"} price={"price"} change={"change"} change_percent={"change percent"} last_trade_time={"last trade time"} dividend={"dividend"} yield={"yield"} />
                {/* Mappind through redux state of tickers */}
                {Object.keys(this.props.tickers).map((key)=> {
                    return this.props.tickers[key];
                }).map(el=>{
                    return (<Ticker key={el.ticker} ticker={el.ticker} exchange={el.exchange} price={el.price} change={el.change} change_percent={el.change_percent} last_trade_time={el.last_trade_time} dividend={el.dividend} yield={el.yield} />);
                })}
            </div>
        );
    }
}
const mapStateToProps = state => ({tickers: state});
export default connect(mapStateToProps)(Tick);
