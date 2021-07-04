import { useMemo } from "react";

const useDefaultProductFormValues = (brands, cats) => {
  return useMemo(() => {
    return {
      id: '',
      name: '',
      details: '',
      category: cats[0].value,
      brand: brands[0].value,
      in_stock: 0,
      images: [],
      prices: [],
      has_options: false,
      options: {
        name: 'category name',
        isSub: true,
        subOptions: [],
        prices: []
      }
    };
  }, [brands, cats]);
};

export default useDefaultProductFormValues;