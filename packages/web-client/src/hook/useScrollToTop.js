import React from 'react';
import { useHistory } from 'react-router-dom';

const useScrollToTop = () => {
  const history = useHistory();
  return React.useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [history]);
};

export default useScrollToTop;