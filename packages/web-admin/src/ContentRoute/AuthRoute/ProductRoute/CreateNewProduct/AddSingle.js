import useAddSingleItem from 'firebase-wrapper/firestore/useAddSingleItem';
import { useCallback } from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import H1 from 'shared-lib/form-item/H1';
import ProductForm from 'shared-lib/ui/ProductForm';
import useDefaultProductFormValues from '../../../../../../shared-lib/ui/ProductForm/useDefaultProductFormValues';

const AddSingle = props => {
  const { cats, brands } = useGlobalState();
  const addSingleItem = useAddSingleItem();
  const showMessage = useShowMessageDialog();
  const handleSubmit = useCallback((values, setValues) => {
    return showMessage(new Promise((resolve, reject) => {
      addSingleItem(values)
        .then(() => {
          setValues(pre => {
            return {
              ...pre,
              images: []
            };
          });
          resolve(`Item [${values.id}] is uploaded.`);
        })
        .catch(reject);
    }), 'Uploading');
  }, [addSingleItem, showMessage]);
  const defaultValues = useDefaultProductFormValues(brands, cats);
  return <>
    <H1>Add single product</H1>
    <ProductForm
      defaultValues={defaultValues}
      handleSubmit={handleSubmit}
      cats={cats}
      brands={brands} />
  </>;
};

export default AddSingle;