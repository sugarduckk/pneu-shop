import React from 'react';

const useVisibilityChange = (handler) => {
  React.useEffect(() => {
    document.addEventListener('visibilitychange', handler);
    return () => {
      document.removeEventListener('visibilitychange', handler);
    };
  });
};

export default useVisibilityChange;