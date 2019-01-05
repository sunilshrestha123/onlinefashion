import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { GetCategory } from '../../service/userapi';

class Displaycategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }
  async componentDidMount() {
    const result = await GetCategory();
    console.log('my result', result);
    this.setState({ category: result.category });
  }

  render() {
    return (
      <div>
        {/* {this.state.category &&
          this.state.category.map(items => ( */}
        <BootstrapTable data={this.state.category} bordered={true}>
          <TableHeaderColumn dataField='id' isKey={true}>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='category_name'>
            Product
          </TableHeaderColumn>
          <TableHeaderColumn dataField='category_des'>
            Product description
          </TableHeaderColumn>
          <TableHeaderColumn dataField=''>edit/delete</TableHeaderColumn>
        </BootstrapTable>
        {/* ))} */}
      </div>
    );
  }
}

export default Displaycategory;
