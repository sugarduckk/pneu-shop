import useDeleteAddress from 'firebase-wrapper/firestore/useDeleteAddress';
import React from 'react';
import { useUpdateDialog } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import useShowConfirmDialog from 'redux-wrapper/hook/useShowConfirmDialog';
import { MessageDialog } from 'redux-wrapper/hook/useShowMessageDialog';
import Button from 'shared-lib/button/Button';
import DialogButton from 'shared-lib/button/DialogButton';
import CardContainer from 'shared-lib/layout/CardContainer';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import errorToMessage from 'shared-lib/util/errorToMessage';
import useClientString from '../../../../hook/useClientString';
import Address from './Address';

const AddressCard = ({ address }) => {
  const S = useClientString();
  const { user } = useGlobalState();
  const deleteAddress = useDeleteAddress(user.uid, address.id);
  const updateDialog = useUpdateDialog();
  const onConfirm = React.useCallback(() => {
    return deleteAddress()
      .then(() => {
        updateDialog(<MessageDialog message={`Address [${address.id}] deleted !`} showDismiss={true} />);
      })
      .catch(error => {
        updateDialog(<MessageDialog message={errorToMessage(error)} showDismiss={true} />);
      });
  }, [deleteAddress, updateDialog, address.id]);
  const showConfirmDialog = useShowConfirmDialog(onConfirm);
  const onDeleteClick = React.useCallback(() => {
    showConfirmDialog({
      message: 'Are you sure to delete this address?'
    });
  }, [showConfirmDialog]);
  return <CardContainer>
    <SimpleCard>
      <Address address={address} />
      <RowLayout>
        <Space />
        <DialogButton onClick={onDeleteClick} bg='red'>
          {S.REMOVE}
        </DialogButton>
      </RowLayout>
    </SimpleCard>
  </CardContainer>;
};

export default AddressCard;