import React from 'react';
const { fs } = require("..");

const useSetMainCarousel = () => {
  return React.useCallback(productIds => {
    return fs.collection('config').doc('interface').set({
      mainCarousel: productIds
    }, {
      merge: true
    });
  }, []);
};

export default useSetMainCarousel;