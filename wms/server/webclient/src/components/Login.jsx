import React, { Component } from 'react';

import { Form, Header, Segment } from 'semantic-ui-react';

class Login extends Component {
    constructor() {
        super();
    }

    handleChange(e, data) {
        if (data.type == "checkbox") {
            this.setState({
                [data.name]: data.checked
            });
        } else {
            this.setState({
                [data.name]: data.value }
            );
        }
    }

    render() {
        return (
            <Segment textAlign="left">
                <Header size="large">Login</Header>
                <Form>
                    <Form.Input name="username" label="Username" icon="user" iconPosition="left" placeholder="Username" autoComplete="username" onChange={this.handleChange.bind(this)}/>
                    <Form.Input name="password" label="Password" icon="lock" iconPosition="left" type="password" placeholder="Password" autoComplete="current-password" onChange={this.handleChange.bind(this)}/>
                    <Form.Checkbox name="stayLogged" label="Stay logged in" onChange={this.handleChange.bind(this)}/>
                    <Form.Button type="submit">Login</Form.Button>
                </Form>
            </Segment>
        );
    }
}

export default Login;