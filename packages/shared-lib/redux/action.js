import ActionType from "./ActionType";


export const setState = state => {
  return {
    type: ActionType.SET_STATE,
    state
  };
};

export const deleteState = key => {
  return {
    type: ActionType.DELETE_STATE,
    key
  };
};

export const addDialog = render => {
  return {
    type: ActionType.ADD_DIALOG,
    render
  };
};

export const dismissDialog = () => {
  return {
    type: ActionType.DISMISS_DIALOG
  };
};

export const removeDialog = () => {
  return {
    type: ActionType.REMOVE_DIALOG
  };
};

export const updateDialog = render => {
  return {
    type: ActionType.UPDATE_DIALOG,
    render
  };
};