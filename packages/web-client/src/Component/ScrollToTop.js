import React from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop = () => {
  const history = useHistory();
  React.useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [history]);

  return null;
};

export default ScrollToTop;