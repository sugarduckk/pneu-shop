import { createStore, combineReducers } from 'redux';
import { clientGlobal } from 'shared-lib/redux/global';

const clientStore = createStore(combineReducers({
  global: clientGlobal
}));

export default clientStore;