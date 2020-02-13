import React, {PureComponent} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Drop extends PureComponent {
    render() {
        return (
            <Dropdown>
            <Dropdown.Toggle className="dropdown" variant="outline-light" id="dropdown-basic">
                Update interval
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">0.5s</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2s</Dropdown.Item>
                <Dropdown.Item href="#/action-3">10s</Dropdown.Item>
                <Dropdown.Item href="#/action-4">30s</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default Drop;
