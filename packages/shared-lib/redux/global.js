import { isArray, isFunction } from 'lodash/lang';
import ActionType from './ActionType';

const global = (state, action) => {
  switch (action.type) {
    case ActionType.SET_STATE: {
      if (isFunction(action.state)) {
        return {
          ...state,
          ...action.state(state)
        };
      }
      return {
        ...state,
        ...action.state
      };
    }
    case ActionType.DELETE_STATE: {
      const newState = { ...state };
      if (isArray(action.key)) {
        action.key.forEach(k => {
          delete newState[k];
        });
      }
      else {
        delete newState[action.key];
      }
      return newState;
    }
    case ActionType.ADD_DIALOG: {
      const newDialogs = [...state.dialogs];
      newDialogs.push({
        render: action.render,
        show: true
      });
      return {
        ...state,
        dialogs: newDialogs
      };
    }
    case ActionType.DISMISS_DIALOG: {
      const newDialogs = [...state.dialogs];
      newDialogs[0].show = false;
      return {
        ...state,
        dialogs: newDialogs
      };
    }
    case ActionType.REMOVE_DIALOG: {
      const newDialogs = [...state.dialogs];
      newDialogs.splice(0, 1);
      return {
        ...state,
        dialogs: newDialogs
      };
    }
    case ActionType.UPDATE_DIALOG: {
      const newDialogs = [...state.dialogs];
      newDialogs[0].render = action.render;
      return {
        ...state,
        dialogs: newDialogs
      };
    }
    default: {
      return state;
    }
  }
};

const defaultClientState = {
  dialogs: [],
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'th'
};

export const clientGlobal = (state = defaultClientState, action) => {
  return global(state, action)
}

const defaultAdminState = {
  dialogs: []
}

export const adminGlobal = (state = defaultAdminState, action) => {
  return global(state, action)
}

export default global;