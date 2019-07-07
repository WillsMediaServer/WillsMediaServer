import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class UnknownPage extends Component {
    render() {
        return (
            <main className="main main-browsepage">
                Oops.... It looks like your lost (Or the developer is too lazy to implement the page you're requesting)
                <br/>
                Head back <Link to="/app">Home</Link>?
            </main>
        )
    }
}
