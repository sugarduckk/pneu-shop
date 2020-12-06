import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import Dropdown from 'shared-lib/form-item/Dropdown';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import { ContentContainer } from 'shared-lib/layout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import ProductCartCard from 'shared-lib/screen/ShoppingCartDialog/ProductCartCard';
import useCreatePayment from '../../../hook/useCreatePayment';

const CheckoutRoute = props => {
  const { cart, addresses } = useGlobalState();
  const addressOptions = React.useMemo(() => {
    return addresses.map(address => {
      const { address: add, tambon, district, province, post_code } = address;
      return {
        label: address.address,
        value: `
          ${add}\n
          ตำบล ${tambon} อำเภอ ${district}\n
          จังหวัด ${province} ${post_code}
        `
      };
    });
  }, [addresses]);
  const [prices, setPrices] = React.useState(new Array(cart.length).fill(0));
  const onPriceChange = React.useCallback((index, price) => {
    setPrices(pre => {
      const newPrices = [...pre];
      newPrices[index] = price;
      return newPrices;
    });
  }, []);
  const createPayment = useCreatePayment();
  const handleSubmit = React.useCallback(values => {
    return createPayment(`${prices.reduce((a, b) => a + b, 0)}`);
  }, [createPayment, prices]);
  const { form, onSubmit, disabled } = useForm({
    to: '',
    address: addressOptions[0]
  }, handleSubmit);
  return <ContentContainer>
    <H1>Checkout</H1>
    <H2>Shopping Cart</H2>
    {(cart && cart.length > 0) ? cart.map((product, index) => {
      return <ProductCartCard productId={product.productId} amount={product.amount} key={product.productId} index={index} onPriceChange={onPriceChange} />;
    }) : <SimpleCard>Empty Cart</SimpleCard>}
    <SimpleCard>
      {`Total: ${prices.reduce((a, b) => a + b, 0)}`}
    </SimpleCard>
    <H2>Address</H2>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <TextInput {...form('to')} label='To' />
        <Dropdown {...form('address')} label='Address' options={addressOptions} />
      </Fieldset>
      <Button>Proceed to payment</Button>
    </Form>
  </ContentContainer>;
};

export default CheckoutRoute;