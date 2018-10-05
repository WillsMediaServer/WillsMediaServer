import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './routes/Main';

import './components/default.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Main}/>
                </Switch>
            </Router>
        );
    }
}

export default App;