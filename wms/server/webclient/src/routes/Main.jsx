import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import Home from '../views/main/Home';
import Login from '../views/main/Login';
import Register from '../views/main/Register';
import Error404 from '../views/main/Error404';

class Main extends Component {
    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={Error404}/>   
                </Switch>
            </MainLayout>
        );
    }
}

export default Main;