import React, { Component } from 'react'

import NotificationIcon from "@material-ui/icons/Notifications"
import ProfileIcon from "@material-ui/icons/AccountCircle"

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <section className="logo">
                    WMS
                </section>
                <section className="search">
                    <input type="text" name="search" id="search"/>
                    <select name="category">
                        <option value="all">All</option>
                        <option value="music">Music</option>
                        <option value="films">Films</option>
                        <option value="tv">TV</option>
                    </select>
                    <button>Search</button>
                </section>

                <section className="right-section">
                    <span className="header-icon notification-icon"><NotificationIcon/></span>
                    <span className="header-icon profile-icon"><ProfileIcon/></span>
                </section>
            </header>
        )
    }
}
