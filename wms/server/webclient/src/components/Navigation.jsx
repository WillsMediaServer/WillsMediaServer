import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

class Navigation extends Component {
    render() {
        return (
            <Menu inverted stackable icon="labeled">
                <Menu.Item header name="home" as={Link} to="/">
                    <Icon name="home"/>
                    Wills Media Server
                </Menu.Item>

                <Menu.Item name="music" as={Link} to="/music">
                    <Icon name="music"/>
                    Music
                </Menu.Item>

                <Menu.Item name="films" as={Link} to="/films">
                    <Icon name="film"/>
                    Films
                </Menu.Item>

                <Menu.Item name="tv" as={Link} to="/tv">
                    <Icon name="tv"/>
                    TV
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;