import { createAction } from 'redux-actions';
//Action ko name
export const ADD_USER = 'ADD_USER';
export const LIST_USER = 'LIST_USER';
export const DELETE_USER = 'DELETE_USER';

// Action
export const addUser = createAction(ADD_USER);
export const deleteUser = createAction(DELETE_USER);

export const listUser = createAction(LIST_USER);
