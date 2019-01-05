import React, { Component } from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';
import { GetCategory } from '../../service/userapi';
import { Addsubcategory } from '../../service/Addsubcategory';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Subcategory extends Component {
  onSubmit = async () => {
    const categoryid = document.getElementById('categoryid').value;
    console.log(categoryid);
    const subcategory = document.getElementById('subcategory').value;
    let sub = parseInt(categoryid);
    console.log(typeof subcategory);

    const desc = document.getElementById('decs').value;
    const data = {
      category_id: sub,
      sub_category: subcategory,
      subcategory_des: desc
    };
    console.log(data);
    await Addsubcategory(data);
  };

  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }
  async componentDidMount() {
    const result = await GetCategory();
    this.setState({ category: result.category });
  }
  render() {
    let value = this.state.category.map(items => (
      <option value={items.id} key={items.id}>
        {items.category_name}
      </option>
    ));
    return (
      <div>
        <form>
          <FormGroup controlId='formControlsSelect'>
            <ControlLabel>Select-Category</ControlLabel>
            <FormControl
              componentClass='select'
              placeholder='select'
              id='categoryid'
            >
              <option value='select'>select</option>
              {value}
            </FormControl>
          </FormGroup>

          <FieldGroup
            id='subcategory'
            type='text'
            label='sub-category'
            placeholder='Enter the sub-category name'
          />
          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>Sub-Category Details</ControlLabel>
            <FormControl
              id='decs'
              componentClass='textarea'
              rows='4'
              placeholder='textarea'
            />
          </FormGroup>
          <Button onClick={this.onSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}

export default Subcategory;
