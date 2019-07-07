import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from "../pages/HomePage"
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';


export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/login" component={ LoginPage }/>
                <Route exact path="/register" component={ RegisterPage }/>
                <Route exact path="/about" />
                <Route />
            </Switch>
        )
    }
}
