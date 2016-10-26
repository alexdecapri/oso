import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'


class CreateTest extends Component {
  render() {
    return (
      <div>

        <Table celled>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
              <Table.HeaderCell>Parameter(s)</Table.HeaderCell>
              <Table.HeaderCell>Expected Result(s)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='3'>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='add circle' /> Add Step
                </Button>
                <Button size='small' color='green'>Save</Button>
                <Button size='small'>Cancel</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>

        </Table>


      </div>
    )
  }
}

export default CreateTest;
