import React from 'react';
import { index } from '..';

const useSearchProduct = () => {
  return React.useCallback((query, category, brand, page = 0) => {
    var filters;
    if (category !== '' && brand === '') {
      filters = `category:"${category}"`;
    }
    else if (category === '' && brand !== '') {
      filters = `brand:"${brand}"`;
    }
    else if (category !== '' && brand !== '') {
      filters = `category:"${category}" AND brand:"${brand}"`;
    }
    if (filters) {
      console.log(filters);
      return index.search(query, {
        filters,
        hitsPerPage: 5,
        page
      });
    }
    else {
      return index.search(query, {
        hitsPerPage: 5,
        page
      });
    }
  }, []);
};

export default useSearchProduct;