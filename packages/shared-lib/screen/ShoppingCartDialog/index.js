import React from 'react';
import useCheckout from '../../../web-client/src/hook/useCheckout';
import Button from '../../button/Button';
import CardContainer from '../../layout/CardContainer';
import RowLayout from '../../layout/RowLayout';
import SimpleCard from '../../layout/SimpleCard';
import Space from '../../layout/Space';
import DialogContainer from '../DialogContainer';
import DimBackground from '../DimBackground';
import ProductCartCard from './ProductCartCard';

const ShoppingCartDialog = ({ cart, showCart, hideCart }) => {
  const [prices, setPrices] = React.useState(new Array(cart.length).fill(0));
  const onPriceChange = React.useCallback((index, price) => {
    setPrices(pre => {
      const newPrices = [...pre];
      newPrices[index] = price;
      return newPrices;
    });
  }, []);
  const checkout = useCheckout();
  return <DimBackground show={showCart}>
    <DialogContainer>
      <CardContainer>
        {(cart && cart.length > 0) ? cart.map((product, index) => {
          return <ProductCartCard productId={product.productId} amount={product.amount} key={product.productId} index={index} onPriceChange={onPriceChange} />;
        }) : <SimpleCard>Empty Cart</SimpleCard>}
      </CardContainer>
      <RowLayout>
        <Space />
        <div>{`${prices.reduce((a, b) => a + b, 0)}`}</div>
        <Button onClick={hideCart} bg='red'>Dismiss</Button>
        <Button onClick={checkout}>Check out</Button>
      </RowLayout>
    </DialogContainer>
  </DimBackground>;
};

export default ShoppingCartDialog;