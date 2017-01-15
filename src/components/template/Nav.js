import React, {Component} from 'react';
import {Link} from 'react-router';
class componentName extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/" onClick={this.onClick} className="">Top</Link>
                    </li>
                    <li>
                        <Link to="/todo" onClick={this.onClick} className="">todo</Link>
                    </li>
                    <li>
                        <Link to="/game" onClick={this.onClick} className="">gema</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default componentName;