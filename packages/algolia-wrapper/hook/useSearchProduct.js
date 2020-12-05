import React from 'react';
import { productsIndex } from '..';

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
      return productsIndex.search(query, {
        filters,
        hitsPerPage: 5,
        page
      });
    }
    else {
      return productsIndex.search(query, {
        hitsPerPage: 5,
        page
      });
    }
  }, []);
};

export default useSearchProduct;