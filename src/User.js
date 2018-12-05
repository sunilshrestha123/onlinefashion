import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addUser, deleteUser } from './action/users';

class User extends Component {
  // list of user
  // data: ['ram','shym','har', 'sunil']
  state = {
    user: []
  };

  // componentDidMount() {
  //   // api call list user
  //   // const user = await user.getUser();
  //   // action to add user in store
  //   // props.addUser(users);
  // }

  // onDelete(id) {
  //   // api call to delet user; noof user 5
  //   const user = await user.deleteUserbyId(id);
  //   // response data: ['ram', 'shym', 'hari']
  //   // action to fetch latest users;
  //   // props.updateUser(user)
  // }
  // // this.setState({user: [{name: 'raeere'}]})

  render() {
    return (
      <div className='App'>
        <div onClick={() => this.props.addUser({ name: 'shyam' })}>Click</div>
        {this.props.user.map(item => (
          <div>{item.name}</div>
        ))}
        <div onclick={() => this.props.deleteUser()}>delete</div>
      </div>
    );
  }
}

// takes value from store.
const mapStateToProps = state => ({
  user: state.users
});

// const mapDispatchToProps = dispatch => {
//   return {
//     listusers: data => {
//       dispatch(addUser(data));

//       };
//     }
//   };
// };

const mapDispatchToProps = {
  addUser,
  deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
