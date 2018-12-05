import { createStore } from 'redux';
import rootReducer from '../src/reducer/index';
const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
