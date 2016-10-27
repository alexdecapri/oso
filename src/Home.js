import React, { Component } from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react'
import logo from './oso.svg';

class Home extends Component {
  render() {
    return (
      <div>

        <img src={logo} id="oso-logo" alt="logo"/>

        <Segment padded id='login-signup'>
         <Button primary fluid>Login</Button>
         <Divider horizontal>Or</Divider>
         <Button secondary fluid>Sign Up Now</Button>
        </Segment>
      </div>
    )
  }
}

export default Home;
