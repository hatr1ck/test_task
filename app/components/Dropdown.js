import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';


class Drop extends Component {
    state = {
        updateevery: 'Update every: 10s'
    }
    setUpdateevery(val, int) {
        this.setState({
            updateevery: val
        });
        // passing needed time interval to our reducer and then to setInterval function
        this.props.setUpdateInterval(int);
    }
    render() {
        return (
                <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="outline-light" id="dropdown-basic">
                    {this.state.updateevery}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {/* this could be the custom input but I thought dropdown menu looks better */}
                    <Dropdown.Item onClick={()=>this.setUpdateevery('Update every: 0.5s', 500)}>0.5s</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setUpdateevery('Update every: 2s', 2000)}>2s</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setUpdateevery('Update every: 10s', 10000)}>10s</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setUpdateevery('Update every: 1m', 60000)}>1m</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            );
    }
}

Drop.propTypes = {
    setUpdateInterval: PropTypes.func.isRequired
};

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        setUpdateInterval: (time)=>{
            dispatch({type: 'CHANGE_INTERVAL', payload: time});
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Drop);
