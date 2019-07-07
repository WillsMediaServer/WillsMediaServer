import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AppContainer from '../containers/AppContainer';
import BrowsePage from '../pages/BrowsePage';
import UnknownPage from '../pages/UnknownPage';


export default class MediaRoutes extends Component {
    render() {
        return (
            <AppContainer>
                <Switch>
                    <Route exact path="/app" component={ BrowsePage }/>
                    <Route component={ UnknownPage }/>
                </Switch>
            </AppContainer>
        )
    }
}
