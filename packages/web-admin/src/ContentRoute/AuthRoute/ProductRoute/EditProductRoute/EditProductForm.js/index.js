import useUpdateProduct from 'firebase-wrapper/firestore/useUpdateProduct';
import { useCallback } from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import ProductForm from 'shared-lib/ui/ProductForm';
import useDefaultProductFormValues from '../../../../../../../shared-lib/ui/ProductForm/useDefaultProductFormValues';

const EditProductForm = ({ product, onUpdated }) => {
  const { cats, brands } = useGlobalState();
  const showMessage = useShowMessageDialog();
  const updateProduct = useUpdateProduct();
  const defaultValues = useDefaultProductFormValues(brands, cats);
  const handleSubmit = useCallback(values => {
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