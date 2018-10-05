import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';

import Home from '../views/main/Home';
import Login from '../views/main/Login';
import Register from '../views/main/Register';
import Error404 from '../views/main/Error404';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route component={Error404}/>   
                    </Switch>
                </Layout>
            </React.Fragment>
        );
    }
}

export default Main;