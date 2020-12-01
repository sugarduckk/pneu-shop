import useAddSingleItem from 'firebase-wrapper/firestore/useAddSingleItem';
import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';
import H1 from 'shared-lib/form-item/H1';
import ProductForm from 'shared-lib/ui/ProductForm';

const AddSingle = props => {
  const { cats, brands } = useGlobalState();
  const addSingleItem = useAddSingleItem();
  const showMessage = useShowMessageDialog();
  const handleSubmit = React.useCallback((values, setValues) => {
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
  const defaultValues = React.useMemo(() => {
    return {
      id: '',
      name: '',
      details: '',
      category: cats[0].value,
      brand: brands[0].value,
      in_stock: 0,
      images: [],
      prices: []
    };
  }, [brands, cats]);
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