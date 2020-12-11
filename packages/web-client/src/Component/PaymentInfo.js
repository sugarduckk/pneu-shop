import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import KeyValueTable from 'shared-lib/ui/KeyValueTable';

const PaymentInfo = props => {
  const { config } = useGlobalState()
  const paymentData = React.useMemo(() => {
    return [
      ['Bank', config.paymentDetails.bankName],
      ['Account Number', config.paymentDetails.accountNum],
      ['Account Name', config.paymentDetails.accountName],
      ['Bank Branch', config.paymentDetails.bankBranch]
    ]
  }, [config])
  return <SimpleCard>
    <div>{'Please make a payment to the following account and upload your slip.'}</div>
    <KeyValueTable data={paymentData} />
  </SimpleCard>;
};

export default PaymentInfo;