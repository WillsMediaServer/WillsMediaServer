import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AppRoutes from "./routes/AppRoutes"
import MainRoutes from "./routes/MainRoutes"


const App = () => (
    <Router>
        <Switch>
            <Route path="/app" component={ AppRoutes }/>
            <Route path="/" component={ MainRoutes }/>
        </Switch>
    </Router>
);

export default App;
