import {connect} from 'react-redux';
import React from 'react';
import Ticker from './Ticker';
import '../styles/tickersMenu.scss';
import PropTypes from 'prop-types';

class TickerContainer extends React.Component {
    // setting update interval this.props.updateInterval
    shouldComponentUpdate(nextProps) {
        // letting component rerender only on adding new ticker
        if(nextProps.updateInterval !== this.props.updateInterval) {
            this.forceUpdate();
        }
        return Object.keys(nextProps.stockTicker).length !== Object.keys(this.props.stockTicker).length;
    }
    componentDidUpdate() {
        clearInterval(this.interval);
        this.interval = setInterval(() => this.forceUpdate(), this.props.updateInterval);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="tickersContainer">
                <Ticker ticker={"name"} exchange={"exchange"} price={"price"} change={"change"} change_percent={"change percent"} last_trade_time={"last trade time"} dividend={"dividend"} yield={"yield"} />
                {/* Mappind through redux state of tickers */}
                {Object.keys(this.props.stockTicker).map((key)=> {
                    return this.props.stockTicker[key];
                }).map(el=>{
                    return (<Ticker key={el.ticker} ticker={el.ticker} exchange={el.exchange} price={el.price} change={el.change} change_percent={el.change_percent} last_trade_time={el.last_trade_time} dividend={el.dividend} yield={el.yield} />);
                })}
            </div>
        );
    }
}

TickerContainer.propTypes = {
    stockTicker: PropTypes.object.isRequired,
    updateInterval: PropTypes.number.isRequired
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(TickerContainer);
