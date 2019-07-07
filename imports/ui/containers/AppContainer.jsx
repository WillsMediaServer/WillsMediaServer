import React, { Component } from 'react'

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


export default class AppContainer extends Component {
    render() {
        return (
            <section className="app-layout">
                <Sidebar/>
                <Header/>
                { this.props.children }
            </section>
        )
    }
}
