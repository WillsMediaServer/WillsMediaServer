import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MusicLayout from '../layouts/MusicLayout';

import MusicHome from '../views/music/MusicHome';

class Music extends Component {
    render() {
        return (
            <MusicLayout>
                <Switch>
                    <Route path="/music" exact component={MusicHome}/>
                </Switch>
            </MusicLayout>
        );
    }
}

export default Music;