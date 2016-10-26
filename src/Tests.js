import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react'

let style1 = {
  marginTop: "20px",
}

let style2 = {
  marginLeft: "10px",
}

class Tests extends Component {
  render() {
    return (
      <div>
      <Item.Group style={style2}>
        <Item style={style1}>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last edit: 16 Days Ago</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last Edit: Yesterday</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last edit: 16 Days Ago</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last Edit: Yesterday</Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last edit: 16 Days Ago</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last Edit: Yesterday</Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last edit: 16 Days Ago</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Item.Description>
            <Item.Extra>Last Edit: Yesterday</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      </div>
    )
  }
}

export default Tests;
