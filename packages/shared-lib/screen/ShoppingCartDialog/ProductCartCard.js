import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import useDecrementFromCart from '../../../web-client/src/hook/useDecrementFromCart';
import useDeleteFromCart from '../../../web-client/src/hook/useDeleteFromCart';
import useIncrementFromCart from '../../../web-client/src/hook/useIncrementFromCart';
import useSetCartAmount from '../../../web-client/src/hook/useSetCartAmount';
import Button from '../../button/Button';
import Input from '../../form-item/TextInput/Input';
import CardContainer from '../../layout/CardContainer';
import MarginCard from '../../layout/MarginCard';
import RoundedLayout from '../../layout/RoundedLayout';
import SimpleCard from '../../layout/SimpleCard';
import Space from '../../layout/Space';
import SquareLayout from '../../layout/SquareLayout';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import DialogLoading from '../DialogScreen/DialogLoading';

const ProductCartCard = ({ productId, amount, index }) => {
  const deleteFromCart = useDeleteFromCart(index);
  const incrementFromCart = useIncrementFromCart(index);
  const decrementFromCart = useDecrementFromCart(index);
  const setCartAmount = useSetCartAmount(index);
  const product = useProduct(productId);
  if (!product) return <DialogLoading />;
  return <CardContainer row={true}>
    <SimpleCard row={true} flex={1}>
      <MarginCard>
        <RoundedLayout>
          <SquareLayout width='10em'>
            <ImagePlaceholder src={product.images[0].src} />
          </SquareLayout>
        </RoundedLayout>
      </MarginCard>
      <Space />
      <CardContainer>
        <div>{product.name}</div>
        <Input width='3em' value={amount} onChange={setCartAmount} type='number' />
      </CardContainer>
      <Space />
    </SimpleCard>
    <CardContainer>
      <Button onClick={incrementFromCart}>+</Button>
      <Button onClick={decrementFromCart}>-</Button>
    </CardContainer>
    <Button onClick={deleteFromCart} bg='red'>Remove</Button>
  </CardContainer>;
};

export default ProductCartCard;