import { isFunction, isArray } from 'lodash/lang';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import ActionType from './ActionType';

const defaultState = {
  dialogs: [],
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  currentOrderStatus: OrderStatus.PENDING_REVIEW
};

const global = (state = defaultState, action) => {
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

export default global;