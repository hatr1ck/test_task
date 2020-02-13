import {connect} from 'react-redux';
import React, {PureComponent} from 'react';

class Tick extends PureComponent {
    render() {
        return (
            <div>
                {Object.keys(this.props.tickers).map((key)=> {
                    return this.props.tickers[key];
                }).map(el=>{
                    return (<div key={el.ticker}>{el.ticker} {el.price} {el.change}</div>);
                })}
            </div>
        );
    }
}
const mapStateToProps = state => ({tickers: state});
export default connect(mapStateToProps, null)(Tick);
