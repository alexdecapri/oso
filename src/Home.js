import React, { Component } from 'react';
import { Segment, Button, Divider, Modal, Icon, Form } from 'semantic-ui-react'
import logo from './oso.svg';

class Home extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>

        <img src={logo} id="oso-logo" alt="logo"/>

        <Segment padded id='login-signup'>
         <Button primary fluid onClick={this.show('small')}>Login</Button>
         <Divider horizontal>Or</Divider>
         <Button secondary fluid>Sign Up Now</Button>
        </Segment>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Welcome back!
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Email</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type='password'/>
                </Form.Field>
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon>
              Login <Icon name='checkmark' />
            </Button>
            <Button onClick={this.close}>
              Exit
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default Home;
