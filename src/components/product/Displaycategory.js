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
    this.setState({ category: result.category });
  }

  render() {
    //   {this.state.category.map(items => {
    return (
      <div>
        {this.state.category.map(items => {
          return (
            <div>
              <BootstrapTable data={items}>
                <TableHeaderColumn dataField={items.id} isKey />
                <TableHeaderColumn dataField={items.category_name}>
                  Category{' '}
                </TableHeaderColumn>
                <TableHeaderColumn dataField='category_name'>
                  Category des
                </TableHeaderColumn>
                <TableHeaderColumn dataField='category_des'>
                  Update Delete
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Displaycategory;
