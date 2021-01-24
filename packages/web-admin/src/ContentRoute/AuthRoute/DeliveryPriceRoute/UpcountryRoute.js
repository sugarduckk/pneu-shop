import useSetDeliveryPrice from 'firebase-wrapper/firestore/useSetDeliveryPrice';
import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import H1 from 'shared-lib/form-item/H1';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import KeyValueTable from 'shared-lib/ui/KeyValueTable';
import errorToMessage from 'shared-lib/util/errorToMessage';
import useDeliveryPrice from './useDeliveryPrice';
import useShowEditDeliveryPriceDialog from './useShowEditDeliveryPriceDialog';

const UpcountryRoute = props => {
  const { config } = useGlobalState();
  const setDeliveryPrice = useSetDeliveryPrice();
  const updateDialog = useUpdateDialog();
  const handleSubmit = React.useCallback(({ deliveryPrices }) => {
    return setDeliveryPrice({
      upcountryPrices: deliveryPrices
    })
      .then(() => {
        updateDialog(<MessageDialog message='Intown price is updated.' showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [setDeliveryPrice, updateDialog]);
  const showEditDeliveryPriceDialog = useShowEditDeliveryPriceDialog(
    config.delivery.upcountryPrices, handleSubmit
  );
  const data = useDeliveryPrice('upcountryPrices');
  return <>
    <H1>Delivery Price for Upcountry</H1>
    <CardContainer>
      <Button onClick={showEditDeliveryPriceDialog}>edit delivery price</Button>
    </CardContainer>
    <CardContainer>
      {data ? <KeyValueTable data={data} /> : <SimpleCard>No prices</SimpleCard>}
    </CardContainer>
  </>;
};

export default UpcountryRoute;