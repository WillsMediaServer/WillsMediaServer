import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MusicLayout from '../layouts/MusicLayout';
import MusicHome from '../views/music/MusicHome';
import MusicSongs from '../views/music/MusicSongs';

class Music extends Component {
    render() {
        return (
            <MusicLayout>
                <Switch>
                    <Route path="/music" exact component={MusicHome}/>
                    <Route path="/music/songs" exact component={MusicSongs} />
                </Switch>
            </MusicLayout>
        );
    }
}

export default Music;