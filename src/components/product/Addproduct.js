import React, { Component } from 'react';
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
import { GetCategory } from '../../service/userapi';

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

class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }
  async componentDidMount() {
    const result = await GetCategory();
    console.log('my product actegory lis', result);
    this.setState({ category: result.category });
  }
  render() {
    let value = this.state.category.map(items => (
      <option key={items.id}>{items.category_name}</option>
    ));

    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} md={6}>
            <form>
              <FieldGroup
                id='Productname'
                type='text'
                label='Product Name'
                placeholder='Enter the product name'
              />
              <FormGroup controlId='formControlsSelect'>
                <ControlLabel>Category</ControlLabel>
                <FormControl componentClass='select' placeholder='select'>
                  <option>select</option>
                  {value}
                </FormControl>
              </FormGroup>
              <FormGroup controlId='formControlsSelect'>
                <ControlLabel>Sub-Category</ControlLabel>
                <FormControl componentClass='select' placeholder='select'>
                  <option value='select'>select</option>
                  <option value='other'>...</option>
                </FormControl>
              </FormGroup>

              <FieldGroup
                id='company name'
                type='text'
                label='Company Name'
                placeholder='Enter the company name'
              />
              <FieldGroup
                id=''
                type='text'
                label='Local Name'
                placeholder='Enter the product name'
              />
              <FieldGroup
                id=''
                type='text'
                label='Product Quantitiy'
                placeholder='Enter the product quantitiy'
              />
              <FieldGroup
                id=''
                type='text'
                label='Product Code'
                placeholder='Enter the product code'
              />
              <FormGroup controlId='formControlsTextarea'>
                <ControlLabel>Product Details</ControlLabel>
                <FormControl
                  componentClass='textarea'
                  rows='4'
                  placeholder='textarea'
                />
              </FormGroup>
              <FieldGroup
                id='company name'
                type='text'
                label='Company Name'
                placeholder='Enter the company name'
              />

              <FieldGroup
                id='formControlsPassword'
                label='Password'
                type='password'
              />
              <FieldGroup
                id='formControlsFile'
                type='file'
                label='File'
                help='Example block-level help text here.'
              />

              <Checkbox checked readOnly>
                Checkbox
              </Checkbox>
              <Radio checked readOnly>
                Radio
              </Radio>

              <FormGroup>
                <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                <Checkbox inline>3</Checkbox>
              </FormGroup>
              <FormGroup>
                <Radio name='radioGroup' inline>
                  1
                </Radio>{' '}
                <Radio name='radioGroup' inline>
                  2
                </Radio>{' '}
                <Radio name='radioGroup' inline>
                  3
                </Radio>
              </FormGroup>

              <FormGroup controlId='formControlsSelect'>
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass='select' placeholder='select'>
                  <option value='select'>select</option>
                  <option value='other'>...</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId='formControlsSelectMultiple'>
                <ControlLabel>Multiple select</ControlLabel>
                <FormControl componentClass='select' multiple>
                  <option value='select'>select (multiple)</option>
                  <option value='other'>...</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId='formControlsTextarea'>
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass='textarea' placeholder='textarea' />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Static text</ControlLabel>
                <FormControl.Static>email@example.com</FormControl.Static>
              </FormGroup>

              <Button type='submit'>Submit</Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Addproduct;
