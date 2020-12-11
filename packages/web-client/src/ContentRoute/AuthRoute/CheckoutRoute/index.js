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
import MarginCard from 'shared-lib/layout/MarginCard';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import ProductCartCard from 'shared-lib/screen/ShoppingCartDialog/ProductCartCard';
import PaymentInfo from '../../../Component/PaymentInfo';
import useCreatePayment from '../../../hook/useCreatePayment';
import useShowAddressFormDialog from '../../../hook/useShowAddressFormDialog';

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
  const onItemRemoved = React.useCallback(index => {
    setPrices(pre => {
      const newPrices = [...pre];
      newPrices.splice(index, 1)
      return newPrices;
    });
  }, []);
  const handleSubmit = useCreatePayment(prices);
  const { form, onSubmit, disabled } = useForm({
    to: '',
    tel: '',
    address: addressOptions.length > 0 ? addressOptions[0].value : null,
    paymentSlips: []
  }, handleSubmit);
  const showAddressFormDialog = useShowAddressFormDialog()
  return <ContentContainer>
    <H1>Checkout</H1>
    <H2>Shopping Cart</H2>
    {(cart && cart.length > 0) ? cart.map((product, index) => {
      return <ProductCartCard productId={product.productId} amount={product.amount} key={product.productId} index={index} onPriceChange={onPriceChange} onItemRemoved={onItemRemoved} />;
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
        <TextInput {...form('tel')} label='Tel' />
        {addressOptions.length > 0 && <DialogSelection {...form('address')} label='Address' options={addressOptions} />}
        <SimpleCard>
          <Button onClick={showAddressFormDialog} type='button'>Add new address</Button>
        </SimpleCard>
        <H2>Make a Payment</H2>
        <PaymentInfo />
        <ImageSelector {...form('paymentSlips')} label='Upload payment slip' multiple={true} />
      </Fieldset>
      <Button>Submit Order</Button>
    </Form>
  </ContentContainer>;
};

export default CheckoutRoute;