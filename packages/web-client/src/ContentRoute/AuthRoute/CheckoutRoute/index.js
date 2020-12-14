import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import Button from 'shared-lib/button/Button';
import DialogSelection from 'shared-lib/form-item/DialogSelection';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Form from 'shared-lib/form-item/Form';
import H1 from 'shared-lib/form-item/H1';
import H2 from 'shared-lib/form-item/H2';
import ImageSelector from 'shared-lib/form-item/ImageSelector';
import TextInput from 'shared-lib/form-item/TextInput';
import useForm from 'shared-lib/hook/useForm';
import { ContentContainer } from 'shared-lib/layout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import PaymentInfo from '../../../Component/PaymentInfo';
import ProductCartCard from '../../../Component/ShoppingCartDialog/ProductCartCard';
import useCreatePayment from '../../../hook/useCreatePayment';
import useShowAddressFormDialog from '../../../hook/useShowAddressFormDialog';
import useTotalPrice from '../../../hook/useTotalPrice';

const CheckoutRoute = props => {
  const { cart, cartData, addresses } = useGlobalState();
  const addressOptions = React.useMemo(() => {
    return addresses.map(address => {
      return {
        label: address.address,
        value: address
      };
    });
  }, [addresses]);
  const totalPrice = useTotalPrice()
  const handleSubmit = useCreatePayment();
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
      return <ProductCartCard product={cartData[product.productId]} amount={product.amount} key={product.productId} index={index} />;
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