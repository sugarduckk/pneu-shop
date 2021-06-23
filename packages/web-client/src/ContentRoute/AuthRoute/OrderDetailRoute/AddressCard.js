import React from 'react';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';

const AddressCard = ({ address, to, tel }) => {
  return <SimpleCard>
    <div>{`To: ${to} (${tel})`}</div>
    <div>{`${address.address} ${address.tambon} ${address.district} ${address.province} ${address.post_code}`}</div>
  </SimpleCard>;
};

export default AddressCard;