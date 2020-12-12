import useProduct from 'firebase-wrapper/firestore/useProduct';
import React from 'react';
import Button from 'shared-lib/button/Button';
import Input from 'shared-lib/form-item/TextInput/Input';
import CloseIcon from 'shared-lib/icon/CloseIcon';
import MinusIcon from 'shared-lib/icon/MinusIcon';
import PlusIcon from 'shared-lib/icon/PlusIcon';
import CardContainer from 'shared-lib/layout/CardContainer';
import MarginCard from 'shared-lib/layout/MarginCard';
import RoundedLayout from 'shared-lib/layout/RoundedLayout';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import SquareLayout from 'shared-lib/layout/SquareLayout';
import DialogLoading from 'shared-lib/screen/DialogScreen/DialogLoading';
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder';
import useDecrementFromCart from '../../hook/useDecrementFromCart';
import useDeleteFromCart from '../../hook/useDeleteFromCart';
import useIncrementFromCart from '../../hook/useIncrementFromCart';
import useSetCartAmount from '../../hook/useSetCartAmount';

const ProductCartCard = ({ product, productId, amount, index, onPriceChange, onItemRemoved }) => {
  const deleteFromCart = useDeleteFromCart(index);
  const incrementFromCart = useIncrementFromCart(index);
  const decrementFromCart = useDecrementFromCart(index);
  const setCartAmount = useSetCartAmount(index);
  const onDelete = React.useCallback(() => {
    onItemRemoved(index)
    deleteFromCart()
  }, [deleteFromCart, onItemRemoved, index])
  const priceIndex = React.useMemo(() => {
    if (product && product.prices) {
      return product.prices.length - product.prices.slice().reverse().findIndex(p => p.threshold <= amount) - 1;
    }
  }, [amount, product])
  const price = React.useMemo(() => {
    if (amount === 0) {
      return 0;
    }
    if (product && product.prices) {
      return product.prices[priceIndex].price * amount;
    }
    else {
      return 0;
    }
  }, [amount, product, priceIndex]);
  React.useEffect(() => {
    if (product) {
      onPriceChange(index, {
        productId,
        productName: product.name,
        quantity: amount,
        unitPrice: product.prices[priceIndex].price
      });
    }
  }, [onPriceChange, index, price, amount, priceIndex, product, productId]);
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
      <Button onClick={amount > 1 ? decrementFromCart : onDelete} icon={<MinusIcon />} />
      <Button onClick={onDelete} bg='red' icon={<CloseIcon />} />
    </CardContainer>
  </CardContainer>;
};

export default ProductCartCard;