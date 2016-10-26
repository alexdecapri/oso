import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react'


class About extends Component {
  render() {
    return (
      <div>
        <h2>Created by these guys...</h2>

        <Card.Group>
          <Card centered raised>
            <Card.Content>
              <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
              <Card.Header>
                Alex DeCapri
              </Card.Header>
              <Card.Meta>
                UI/UX Designer
              </Card.Meta>
              <Card.Description>
                Enjoys clean design and long walks on the beach.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='facebook'>
                  <Icon name="facebook" /> Facebook
                </Button>
                <Button color='instagram'>
                  <Icon name="instagram" /> Instagram
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered raised>
            <Card.Content>
              <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar2/large/molly.png' />
              <Card.Header>
                Taylor Daily
              </Card.Header>
              <Card.Meta>
                Full Stack Developer
              </Card.Meta>
              <Card.Description>
                Specializes in C#, .NET, and bicycling down canyons.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='facebook'>
                  <Icon name="facebook" /> Facebook
                </Button>
                <Button color='instagram'>
                  <Icon name="instagram" /> Instagram
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered raised>
            <Card.Content>
              <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/jenny.jpg' />
              <Card.Header>
                Hunter Cornelison
              </Card.Header>
              <Card.Meta>
                Product Manager
              </Card.Meta>
              <Card.Description>
                The genius behind the name and overall product feel. Hits a mean golf ball while skiing at Alta.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='facebook'>
                  <Icon name="facebook" /> Facebook
                </Button>
                <Button color='instagram'>
                  <Icon name="instagram" /> Instagram
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>

      </div>
    )
  }
}

export default About;
