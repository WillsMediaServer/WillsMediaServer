import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/music">Music</Link>
                <Link to="/films">Films</Link>
                <Link to="/tv">TV</Link>
                <Link to="/account" className="account">Account</Link>
            </nav>
        );
    }
}

export default Navigation;