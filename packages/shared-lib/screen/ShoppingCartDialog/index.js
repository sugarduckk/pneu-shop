import React from 'react';
import Button from '../../button/Button';
import CardContainer from '../../layout/CardContainer';
import SimpleCard from '../../layout/SimpleCard';
import Space from '../../layout/Space';
import DialogContainer from '../DialogContainer';
import DimBackground from '../DimBackground';
import ProductCartCard from './ProductCartCard';

const ShoppingCartDialog = ({ cart, showCart, hideCart }) => {
  return <DimBackground show={showCart}>
    <DialogContainer>
      <CardContainer>
        {(cart && cart.length > 0) ? cart.map((product, index) => {
          return <ProductCartCard productId={product.productId} amount={product.amount} key={product.productId} index={index} />;
        }) : <SimpleCard>Empty Cart</SimpleCard>}
      </CardContainer>
      <CardContainer row={true}>
        <Space />
        <Button onClick={hideCart} bg='red'>Dismiss</Button>
        <Button>Check out</Button>
      </CardContainer>
    </DialogContainer>
  </DimBackground>;
};

export default ShoppingCartDialog;