import React, { Component } from 'react'

import SearchIcon from "@material-ui/icons/Search"
import MusicIcon from "@material-ui/icons/MusicNote"
import FilmIcon from "@material-ui/icons/LocalMovies"
import TVIcon from "@material-ui/icons/TV"
import FavouriteIcon from "@material-ui/icons/Favorite"
import BookmarkIcon from "@material-ui/icons/Bookmarks"
import PlayLaterIcon from "@material-ui/icons/WatchLater"
import SettingsIcon from "@material-ui/icons/Settings"
import LougoutIcon from "@material-ui/icons/ExitToApp"

import NavLink from "./components/NavLink"

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <section className="profile">
                    <img className="profile-picture" src="https://randomuser.me/api/portraits/lego/6.jpg" alt="Profile Picture"/>
                    <section className="user-details">
                        <h2 className="full-name">Full Name</h2>
                        <h4 className="username-rank">username, rank</h4>
                        <button className="button button-primary button-block">Profile</button>
                    </section>
                </section>

                <hr/>

                <section className="media-links">
                    <NavLink text="Browse" active={ true }><SearchIcon/></NavLink>
                    <NavLink text="Music"><MusicIcon/></NavLink>
                    <NavLink text="Films"><FilmIcon/></NavLink>
                    <NavLink text="TV"><TVIcon/></NavLink>
                </section>

                <hr/>

                <section className="user-links">
                    <NavLink text="Favourite"><FavouriteIcon/></NavLink>
                    <NavLink text="Bookmarks"><BookmarkIcon/></NavLink>
                    <NavLink text="Play Later"><PlayLaterIcon/></NavLink>
                </section>

                <hr/>

                <section className="admin-links">
                    <NavLink text="Settings"><SettingsIcon/></NavLink>
                    <NavLink text="Logout"><LougoutIcon/></NavLink>
                </section>
            </aside>
        )
    }
}
