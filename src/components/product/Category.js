import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {
  Grid,
  Row,
  Radio,
  FormControl,
  FormGroup,
  Col,
  ControlLabel,
  Checkbox,
  Button,
  HelpBlock
} from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import { AddCategory } from '../../service/userapi';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      {' '}
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Category extends Component {
  onSubmit = async () => {
    console.log('here..');
    const category = document.getElementById('category').value;
    console.log(category);
    const description = document.getElementById('description').value;
    console.log(description);
    const payload = {
      category_name: category,
      category_des: description
    };
    await AddCategory(payload);
  };
  constructor() {
    super();
    this.state = { toggleActive: true };
    this.onToggle = this.onToggle.bind(this);
  }
  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} md={6}>
            <form>
              <FieldGroup
                id='category'
                type='text'
                label='Category'
                placeholder='Enter Category name'
              />
              <FormGroup controlId='formControlsTextarea'>
                <ControlLabel>Category Details</ControlLabel>
                <FormControl
                  id='description'
                  componentClass='textarea'
                  rows='4'
                  placeholder='Category details'
                />
              </FormGroup>

              <Button bsStyle='primary' onClick={this.onSubmit}>
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Category;
