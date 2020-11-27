import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import EditIcon from 'shared-lib/icon/EditIcon';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import Space from 'shared-lib/layout/Space';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import ProductDetail from 'shared-lib/ui/ProductDetail';
import EditProductForm from './EditProductForm.js';
import useOnDeleteProduct from './useOnDeleteProduct';

const EditProductRoute = props => {
  const [editing, setEditing] = React.useState(false);
  const { productId } = useParams();
  const onDelete = useOnDeleteProduct(productId);
  const onEdit = React.useCallback(e => {
    if (!editing) {
      setEditing(true);
    }
  }, [editing]);
  const onDiscard = React.useCallback(() => {
    setEditing(false);
  }, []);
  const product = useProduct(productId);
  if (product === undefined) return <ContentContainer>
    <DialogLoading />
  </ContentContainer>;
  if (product === null) return <ContentContainer>
    <H1>{`No product with id: ${productId}`}</H1>
  </ContentContainer>;
  return <ContentContainer>
    <H1>{product.name}</H1>
    <CardContainer row={true}>
      <Space />
      {
        editing ?
          <Button bg='red' onClick={onDiscard}>discard</Button>
          :
          <>
            <Button icon={<EditIcon />} onClick={onEdit}>edit</Button>
            <Button bg='red' onClick={onDelete}>delete</Button>
          </>
      }
    </CardContainer>
    {editing ?
      <CardContainer>
        <EditProductForm product={product} onUpdated={onDiscard} />
      </CardContainer>
      :
      <ProductDetail product={product} />
    }
  </ContentContainer>;
};

export default EditProductRoute;