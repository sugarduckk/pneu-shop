import React from 'react';
import { useDismissDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import H2 from 'shared-lib/form-item/H2';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import useCheckout from '../../hook/useCheckout';
import useDeliveryFee from '../../hook/useDeliveryFee';
import useTotalPrice from '../../hook/useTotalPrice';
import ProductCartCard from './ProductCartCard';
import ProductContainer from './ProductContainer';

const ShoppingCartDialog = props => {
  const { cart, cartData } = useGlobalState();
  const dismiss = useDismissDialog();
  const deliveryFee = useDeliveryFee();
  const totalPrice = useTotalPrice();
  const checkout = useCheckout();
  if (cart.length > 0 && !cartData) return <DialogLoading />;
  return <>
    <ProductContainer>
      {(cart && cart.length > 0) ? cart.map((product, index) => {
        if (!cartData || !cartData[product.productId]) return <DialogLoading key={index} />;
        return <ProductCartCard product={cartData[product.productId]} amount={product.amount} key={product.productId} index={index} />;
      }) : <SimpleCard>Empty Cart</SimpleCard>}
    </ProductContainer>
    <SimpleCard>
      <H2>{`Subtotal: ${totalPrice} THB`}</H2>
      <div>
        {`Delivery fee (Bangkok): ${deliveryFee.intown} THB`}
      </div>
      <div>
        {`Delivery fee (Other provinces): ${deliveryFee.upcountry} THB`}
      </div>
    </SimpleCard>
    <RowLayout>
      <Space />
      <Button onClick={dismiss} bg='red'>Dismiss</Button>
      <Button onClick={checkout}>Check out</Button>
    </RowLayout>
  </>;
};

export default ShoppingCartDialog;