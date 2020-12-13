import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import H2 from 'shared-lib/form-item/H2';
import CardContainer from 'shared-lib/layout/CardContainer';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import useCheckout from '../../hook/useCheckout';
import useTotalPrice from '../../hook/useTotalPrice';
import ProductCartCard from './ProductCartCard';

const ShoppingCartDialog = props => {
  const { cart, cartData } = useGlobalState()
  const dismiss = useDismissDialog()
  const totalPrice = useTotalPrice()
  const checkout = useCheckout();
  if (!cartData) return <DialogLoading />
  return <>
    <CardContainer>
      {(cart && cart.length > 0) ? cart.map((product, index) => {
        return <ProductCartCard product={cartData[product.productId]} productId={product.productId} amount={product.amount} key={product.productId} index={index} />;
      }) : <SimpleCard>Empty Cart</SimpleCard>}
    </CardContainer>
    <H2>{`Total: ${totalPrice} THB`}</H2>
    <RowLayout>
      <Space />
      <Button onClick={dismiss} bg='red'>Dismiss</Button>
      <Button onClick={checkout}>Check out</Button>
    </RowLayout>
  </>
};

export default ShoppingCartDialog;