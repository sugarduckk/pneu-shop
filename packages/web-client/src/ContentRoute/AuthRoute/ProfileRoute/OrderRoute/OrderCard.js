import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Button from 'shared-lib/button/Button';
import Space from 'shared-lib/layout/Space';
import RowLayout from 'shared-lib/layout/RowLayout';

const OrderCard = ({ doc }) => {
  const data = React.useMemo(() => {
    return doc.data();
  }, [doc]);
  return <SimpleCard>
    <div>
      <div>{data.to}</div>
      <div>{data.address}</div>
      <div>{data.timestamp && data.timestamp.toDate().toString()}</div>
    </div>
  </SimpleCard>;
};

export default OrderCard;
