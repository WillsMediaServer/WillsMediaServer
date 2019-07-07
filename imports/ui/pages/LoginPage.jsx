import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Jumbotron from '../containers/Jumbotron';
import LargeTitle from '../components/LargeTitle';
import Input from '../components/Input';

export default class LoginPage extends Component {
    render() {
        return (
            <Jumbotron centered={ true }>
                <LargeTitle>Login</LargeTitle>

                <Input block={ true } placeholder="Username" name="username" type="text"/>
                <Input block={ true } placeholder="Password" name="password" type="password"/>
                <Button block={ true }>Login</Button>

                <span className="linkgroup">
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/about">About</Link>
                </span>
            </Jumbotron>
        )
    }
}
