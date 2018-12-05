import { ADD_USER, LIST_USER } from '../action/users';
//action -action.type(name)
//action -action-payload

export default function(state = [{ name: 'ram' }], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case LIST_USER:
      return [action.payload];
    default:
      return state;
  }
}
