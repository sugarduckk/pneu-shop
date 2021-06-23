import useUpdateProduct from 'firebase-wrapper/firestore/useUpdateProduct';
import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import ProductForm, { HasOptions } from 'shared-lib/ui/ProductForm';

const EditProductForm = ({ product, onUpdated }) => {
  const { cats, brands } = useGlobalState();
  const showMessage = useShowMessageDialog();
  const updateProduct = useUpdateProduct();
  const defaultValues = React.useMemo(() => {
    return {
      id: '',
      name: '',
      details: '',
      category: cats[0].value,
      brand: brands[0].value,
      in_stock: 0,
      images: [],
      prices: [],
      has_options: HasOptions[0],
      options: {
        name: 'category name',
        isSub: true,
        subOptions: []
      }
    };
  }, [brands, cats]);
  const handleSubmit = React.useCallback(values => {
    return showMessage(new Promise((resolve, reject) => {
      updateProduct(product, values)
        .then(() => {
          resolve(`Item [${product.id}] is updated.`);
          onUpdated();
        })
        .catch(reject);
    }), 'Updating');
  }, [onUpdated, product, showMessage, updateProduct]);
  return <ProductForm
    defaultValues={{
      ...defaultValues,
      ...product
    }}
    handleSubmit={handleSubmit}
    cats={cats}
    brands={brands} />;
};

export default EditProductForm;