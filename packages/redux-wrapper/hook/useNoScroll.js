import React from 'react';
import useGlobalState from './useGlobalState';

const useNoScroll = () => {
  const { dialogs } = useGlobalState();
  const noScroll = React.useMemo(() => {
    let promptShow = false;
    if (dialogs.length > 0) {
      promptShow = dialogs[0].show;
    }
    return promptShow;
  }, [dialogs]);
  return noScroll;
};

export default useNoScroll;