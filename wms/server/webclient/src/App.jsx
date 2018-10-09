import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './routes/Main';
import Music from './routes/Music';

import 'semantic-ui-css/semantic.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/music" component={Music}/>
                    <Route path="/" component={Main}/>
                </Switch>
            </Router>
        );
    }
}

export default App;