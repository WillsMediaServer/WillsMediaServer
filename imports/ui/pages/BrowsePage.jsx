import React, { Component } from 'react';

import Statistic from '../components/Statistic';


export default class BrowsePage extends Component {
    render() {
        return (
            <main className="main main-browsepage">
                <section className="statistic-group">
                    <Statistic name="Songs" number="23,762"/>
                    <Statistic name="Films" number="1,745"/>
                    <Statistic name="Episodes" number="8,858"/>
                </section>
            </main>
        )
    }
}
