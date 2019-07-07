import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button from "./Button";
import SidebarLink from "./SidebarLink";

import { MdSearch, MdMusicNote, MdLocalMovies, MdTv, MdFavorite, MdCollectionsBookmark, MdWatchLater, MdSettings, MdExitToApp } from "react-icons/md";

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <section className="profile">
                    <img className="profile-picture" src="https://randomuser.me/api/portraits/lego/6.jpg" alt="Profile Picture"/>
                    <section className="user-details">
                        <h2 className="full-name">Full Name</h2>
                        <h4 className="username-rank">username, rank</h4>
                        <Link to="/app/profile"><Button block={ true } size="small">Profile</Button></Link>
                    </section>
                </section>

                <hr/>

                <section className="sidebar-links media-links">
                    <SidebarLink to="/app"       icon={ <MdSearch/> }>Browse</SidebarLink>
                    <SidebarLink to="/app/music" icon={ <MdMusicNote/> }>Music</SidebarLink>
                    <SidebarLink to="/app/films" icon={ <MdLocalMovies/> }>Films</SidebarLink>
                    <SidebarLink to="/app/tv"    icon={ <MdTv/> }>TV</SidebarLink>
                </section>

                <hr/>

                <section className="sidebar-links user-links">
                    <SidebarLink to="/app/favourites" icon={ <MdFavorite/> }>Favourites</SidebarLink>
                    <SidebarLink to="/app/bookmarks"  icon={ <MdCollectionsBookmark/> }>Bookmarks</SidebarLink>
                    <SidebarLink to="/app/later"      icon={ <MdWatchLater/> }>Play Later</SidebarLink>
                </section>

                <hr/>

                <section className="sidebar-links admin-links">
                    <SidebarLink to="/app/settings" icon={ <MdSettings/> }>Settings</SidebarLink>
                    <SidebarLink to="/app/logout"   icon={ <MdExitToApp/> }>Logout</SidebarLink>
                </section>
            </aside>
        )
    }
}
