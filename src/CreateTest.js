import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Button, Input } from 'semantic-ui-react'


let style = {
  width: '100%'
}

class CreateTest extends Component {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
  }

  render() {
    return (
      <div>

        <Table celled striped>

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
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
              <Table.Cell>
                <Input style={style} />
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='3'>
                <Button onClick={this.addRow} floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='add circle'/> Add Step
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

  addRow() {
    console.log("Click working.");
    return (
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>
          <Input style={style} />
        </Table.Cell>
        <Table.Cell>
          <Input style={style} />
        </Table.Cell>
        <Table.Cell>
          <Input style={style} />
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default CreateTest;
