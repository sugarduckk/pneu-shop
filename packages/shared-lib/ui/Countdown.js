import React from 'react';

const Countdown = ({ count, callback }) => {
  const [counter, setCounter] = React.useState(count);
  React.useEffect(() => {
    if (counter > 0) {
      var timeout = setTimeout(() => {
        setCounter(c => c - 1);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
    else if (callback) {
      callback();
    }
  }, [counter, callback]);
  if (counter) {
    return <div>{`${Math.round(counter / 60)} min ${counter % 60} sec`}</div>;
  }
  return <div>non</div>;
};

export default Countdown;