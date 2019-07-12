import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Statistic from '../components/Statistic';
import { Songs } from "../../api/music/songs";
import Song from '../components/Song';


class BrowsePage extends Component {
    render() {
        return (
            <main className="main main-browsepage">
                <section className="statistic-group">
                    <Statistic name="Songs" number={ this.props.songNumber }/>
                    <Statistic name="Films" number="1,745"/>
                    <Statistic name="Episodes" number="8,858"/>
                </section>

                <section>
                    <h1>Recently Added Songs</h1>
                    { this.props.recentlyAddedSongs.map((song) => {
                        return <Song key={ song._id } name={ song.name } artist={ song.artist } coverURL=""/>
                    }) }
                </section>
            </main>
        )
    }
}

export default withTracker(() => {
    return {
        recentlyAddedSongs: Songs.find({}, { limit: 16, sort: { _id: -1 } }).fetch(),
        songNumber: Songs.find({}).count()
    };
})(BrowsePage);