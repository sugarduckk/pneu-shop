import { createStore, combineReducers } from 'redux';
import { adminGlobal } from 'shared-lib/redux/global';

const adminStore = createStore(combineReducers({
  global: adminGlobal
}));

export default adminStore;