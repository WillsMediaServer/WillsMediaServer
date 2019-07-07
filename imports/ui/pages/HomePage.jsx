import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Button from "../components/Button"
import Jumbotron from "../containers/Jumbotron"
import LargeTitle from "../components/LargeTitle"

export default class HomePage extends Component {
    render() {
        return (
            <Jumbotron centered={ true }>
                <LargeTitle>Welcome to Wills<wbr/>Media<wbr/>Server</LargeTitle>
                <Link to="/login"><Button>Login</Button></Link>
                <Link to="/register"><Button>Register</Button></Link>
            </Jumbotron>
        )
    }
}
