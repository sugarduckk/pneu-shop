import React from 'react';
import OrderStatus from 'shared-lib/constant/OrderStatus';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import dateToString from 'shared-lib/util/dateToString';
import useClientString from '../../../hook/useClientString';

const HistoryCard = ({ history }) => {
  const S = useClientString();
  return <SimpleCard>
    <div>{history.timestamp && dateToString(history.timestamp.toDate())}</div>
    <div>{S[`ORDER_STATUS_${history.status}`]}</div>
  </SimpleCard>;
};

export default HistoryCard;