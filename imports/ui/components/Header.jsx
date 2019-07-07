import React, { Component } from 'react';
import { MdSearch, MdNotifications, MdAccountCircle } from "react-icons/md";

import Button from './Button';
import Input from "./Input";
import Dropdown from './Dropdown';


export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="logo">WMS</span>
                <section className="searchbar">
                    <Input className="searchbar-input" name="search" type="text" placeholder="Search"/>
                    <Dropdown className="searchbar-dropdown" name="category" options={["All", "Music", "Films", "TV"]}/>
                    <Button className="searchbar-button"><MdSearch/></Button>
                </section>
                <section className="right-icons">
                    <MdNotifications/>
                    <MdAccountCircle/>
                </section>
            </header>
        )
    }
}
