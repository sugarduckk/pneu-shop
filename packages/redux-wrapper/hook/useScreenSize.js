import React from 'react';
import { useTheme } from 'shared-lib/core';
import { useSetState } from '../action';

const useScreenSize = () => {
  const theme = useTheme();
  const setState = useSetState();
  const handler = React.useCallback(event => {
    if (event.matches) {
      setState({
        screenSize: 'L'
      });
    }
    else {
      setState({
        screenSize: 'S'
      });
    }
  }, [setState]);
  return React.useEffect(() => {
    const media = window.matchMedia(`(min-width: ${theme.dim.phoneWidth}px)`);
    media.addEventListener("change", handler);
    return () => {
      media.removeEventListener("change", handler);
    };
  }, [handler, theme.dim.phoneWidth]);
};

export default useScreenSize;