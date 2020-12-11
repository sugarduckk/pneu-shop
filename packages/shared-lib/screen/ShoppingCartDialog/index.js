import React from 'react';
import useCheckout from '../../../web-client/src/hook/useCheckout';
import Button from '../../button/Button';
import H2 from '../../form-item/H2';
import CardContainer from '../../layout/CardContainer';
import RowLayout from '../../layout/RowLayout';
import SimpleCard from '../../layout/SimpleCard';
import Space from '../../layout/Space';
import DialogContainer from '../DialogContainer';
import DimBackground from '../DimBackground';
import ProductCartCard from './ProductCartCard';

const ShoppingCartDialog = ({ cart, showCart, hideCart }) => {
  const [prices, setPrices] = React.useState(cart && cart.map(item => {
    return {
      productId: item.productId,
      quantity: item.amount,
      unitPrice: 0
    }
  }));
  const totalPrice = React.useMemo(() => {
    if (prices) {
      console.log(prices)
      return prices.reduce((total, currentPrice) => {
        return total + currentPrice.quantity * currentPrice.unitPrice
      }, 0)
    }
    else {
      return null
    }
  }, [prices])
  const onPriceChange = React.useCallback((index, price) => {
    setPrices(pre => {
      const newPrices = [...pre];
      newPrices[index] = price;
      return newPrices;
    });
  }, []);
  const onItemRemoved = React.useCallback(index => {
    setPrices(pre => {
      const newPrices = [...pre];
      newPrices.splice(index, 1)
      return newPrices;
    });
  }, []);
  const checkout = useCheckout();
  return <DimBackground show={showCart}>
    <DialogContainer>
      <CardContainer>
        {(cart && cart.length > 0) ? cart.map((product, index) => {
          return <ProductCartCard productId={product.productId} amount={product.amount} key={product.productId} index={index} onPriceChange={onPriceChange} onItemRemoved={onItemRemoved} />;
        }) : <SimpleCard>Empty Cart</SimpleCard>}
      </CardContainer>
      <H2>{`Total: ${totalPrice} THB`}</H2>
      <RowLayout>
        <Space />
        <Button onClick={hideCart} bg='red'>Dismiss</Button>
        <Button onClick={checkout}>Check out</Button>
      </RowLayout>
    </DialogContainer>
  </DimBackground>;
};

export default ShoppingCartDialog;