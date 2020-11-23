import { createStore, combineReducers } from 'redux';
import global from 'shared-lib/redux/global';

const store = createStore(combineReducers({
  global
}));

export default store;