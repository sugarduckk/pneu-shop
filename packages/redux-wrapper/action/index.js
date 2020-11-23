import React from 'react';
import ActionType from "./ActionType";
import { useDispatch } from 'react-redux';

const useAction = (action) => {
  const dispatch = useDispatch();
  return React.useCallback((...args) => {
    console.log("dispatch", action(...args));
    dispatch(action(...args));
  }, [dispatch, action]);
};

export const useSetState = () => {
  const setState = React.useCallback(state => {
    return {
      type: ActionType.SET_STATE,
      state
    };
  }, []);
  return useAction(setState);
};

export const useDeleteState = () => {
  const deleteState = React.useCallback(key => {
    return {
      type: ActionType.DELETE_STATE,
      key
    };
  }, []);
  return useAction(deleteState);
};

export const useAddDialog = () => {
  const addDialog = React.useCallback(render => {
    return {
      type: ActionType.ADD_DIALOG,
      render
    };
  }, []);
  return useAction(addDialog);
};

export const useDismissDialog = () => {
  const dismissDialog = React.useCallback(() => {
    return {
      type: ActionType.DISMISS_DIALOG
    };
  }, []);
  return useAction(dismissDialog);
};

export const useRemoveDialog = () => {
  const removeDialog = React.useCallback(() => {
    return {
      type: ActionType.REMOVE_DIALOG
    };
  }, []);
  return useAction(removeDialog);
};

export const useUpdateDialog = () => {
  const updateDialog = React.useCallback(render => {
    return {
      type: ActionType.UPDATE_DIALOG,
      render
    };
  }, []);
  return useAction(updateDialog);
};
