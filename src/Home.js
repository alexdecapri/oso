import React, { Component } from 'react';
import { Segment, Button, Divider, Modal, Icon, Form, Checkbox } from 'semantic-ui-react'
import logo from './oso.svg';

class Home extends Component {
  state = {
    open1: false,
    open2: false
  }

  show1 = (size) => () => this.setState({ size, open1: true })
  close1 = () => this.setState({ open1: false })

  show2 = (size) => () => this.setState({ size, open2: true })
  close2 = () => this.setState({ open2: false })

  render() {
    const { open1, open2, size } = this.state

    return (
      <div>

        <img src={logo} id="oso-logo" alt="logo"/>

        <Segment padded id='login-signup'>
         <Button primary fluid onClick={this.show1('small')}>Login</Button>
         <Divider horizontal>Or</Divider>
         <Button secondary fluid onClick={this.show2('small')}>Sign Up Now</Button>
        </Segment>

        <Modal size={size} open={open1} onClose={this.close1}>
          <Modal.Header>
            Welcome back!
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Email</label>
                  <input type='email' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type='password' />
                </Form.Field>
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon>
              Login <Icon name='checkmark' />
            </Button>
            <Button onClick={this.close1}>
              Exit
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal size={size} open={open2} onClose={this.close2}>
          <Modal.Header>
            Make an account!
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>First Name</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input/>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Email</label>
                <input type='email' />
                </Form.Field>
              <Form.Field>
                <label>Verify Email</label>
                <input type='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon>
              Sign up <Icon name='checkmark' />
            </Button>
            <Button onClick={this.close2}>
              Exit
            </Button>
          </Modal.Actions>
        </Modal>

      </div>
    )
  }
}

export default Home;
