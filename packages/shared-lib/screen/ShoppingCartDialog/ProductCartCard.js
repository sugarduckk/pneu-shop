import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import useDecrementFromCart from '../../../web-client/src/hook/useDecrementFromCart';
import useDeleteFromCart from '../../../web-client/src/hook/useDeleteFromCart';
import useIncrementFromCart from '../../../web-client/src/hook/useIncrementFromCart';
import useSetCartAmount from '../../../web-client/src/hook/useSetCartAmount';
import Button from '../../button/Button';
import Input from '../../form-item/TextInput/Input';
import CloseIcon from '../../icon/CloseIcon';
import MinusIcon from '../../icon/MinusIcon';
import PlusIcon from '../../icon/PlusIcon';
import CardContainer from '../../layout/CardContainer';
import MarginCard from '../../layout/MarginCard';
import RoundedLayout from '../../layout/RoundedLayout';
import RowLayout from '../../layout/RowLayout';
import SimpleCard from '../../layout/SimpleCard';
import SquareLayout from '../../layout/SquareLayout';
import ImagePlaceholder from '../../ui/ImagePlaceholder';
import DialogLoading from '../DialogScreen/DialogLoading';

const ProductCartCard = ({ productId, amount, index, onPriceChange }) => {
  const deleteFromCart = useDeleteFromCart(index);
  const incrementFromCart = useIncrementFromCart(index);
  const decrementFromCart = useDecrementFromCart(index);
  const setCartAmount = useSetCartAmount(index);
  const product = useProduct(productId);
  const price = React.useMemo(() => {
    if (amount === 0) {
      return 0;
    }
    if (product) {
      const i = product.prices.length - product.prices.slice().reverse().findIndex(p => p.threshold <= amount) - 1;
      return product.prices[i].price * amount;
    }
  }, [amount, product]);
  React.useEffect(() => {
    onPriceChange(index, price);
  }, [onPriceChange, index, price]);
  if (!product) return <DialogLoading />;
  return <CardContainer row={true}>
    <SimpleCard flex={1}>
      <MarginCard>
        <RoundedLayout >
          <SquareLayout width='8em'>
            <ImagePlaceholder src={product.images[0].src} />
          </SquareLayout>
        </RoundedLayout>
      </MarginCard>
      <CardContainer style={{ alignItems: 'center' }}>
        <div>{product.name}</div>
        <RowLayout>
          <Input style={{ textAlign: 'center' }} width='3em' value={amount} onChange={setCartAmount} type='number' /><span>pieces</span>
        </RowLayout>
        <div>{`Price: ${price}`}</div>
      </CardContainer>
    </SimpleCard>
    <CardContainer>
      <Button onClick={incrementFromCart} icon={<PlusIcon />} />
      <Button onClick={decrementFromCart} icon={<MinusIcon />} />
      <Button onClick={deleteFromCart} bg='red' icon={<CloseIcon />} />
    </CardContainer>
  </CardContainer>;
};

export default ProductCartCard;