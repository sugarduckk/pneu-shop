import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import DialogSelection from 'shared-lib/form-item/DialogSelection';
import Dropdown from 'shared-lib/form-item/Dropdown';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import ImageSelector from 'shared-lib/form-item/ImageSelector';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import { ContentContainer } from 'shared-lib/layout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import ProductCartCard from 'shared-lib/screen/ShoppingCartDialog/ProductCartCard';
import PaymentInfo from '../../../Component/PaymentInfo';
import useCreatePayment from '../../../hook/useCreatePayment';

const CheckoutRoute = props => {
  const { cart, addresses } = useGlobalState();
  const addressOptions = React.useMemo(() => {
    return addresses.map(address => {
      return {
        label: address.address,
        value: address
      };
    });
  }, [addresses]);
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
  const handleSubmit = useCreatePayment(prices);
  const { form, onSubmit, disabled } = useForm({
    to: '',
    address: addressOptions[0].value,
    paymentSlips: []
  }, handleSubmit);
  return <ContentContainer>
    <H1>Checkout</H1>
    <H2>Shopping Cart</H2>
    {(cart && cart.length > 0) ? cart.map((product, index) => {
      return <ProductCartCard productId={product.productId} amount={product.amount} key={product.productId} index={index} onPriceChange={onPriceChange} />;
    }) : <SimpleCard>Empty Cart</SimpleCard>}
    <SimpleCard>
      <H2>
        {`Total: ${totalPrice} THB`}
      </H2>
    </SimpleCard>
    <H2>Address</H2>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('to')} label='To' />
        <DialogSelection {...form('address')} label='Address' options={addressOptions} />
        <PaymentInfo />
        <ImageSelector {...form('paymentSlips')} label='Upload payment slip' multiple={true} />
      </Fieldset>
      <Button>Proceed to payment</Button>
    </Form>
  </ContentContainer>;
};

export default CheckoutRoute;