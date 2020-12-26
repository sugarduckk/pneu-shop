import React from 'react';
import AddressContainer from 'shared-lib/ui/Address/AddressContainer';
import LabelContainer from 'shared-lib/ui/LabelContainer';
import TextContainer from 'shared-lib/ui/TextContainer';
import useClientString from '../../../../../hook/useClientString';

// const { address: addr, tambon, district, province, post_code } = address;

const Address = ({ address }) => {
  const S = useClientString();
  return <div style={{ width: '100%' }}>
    <AddressContainer>
      <LabelContainer>{S.ADDRESS}</LabelContainer>
      <TextContainer>{address.address}</TextContainer>
      <LabelContainer>{S.TAMBON}</LabelContainer>
      <TextContainer>{address.tambon}</TextContainer>
      <LabelContainer>{S.DISTRICT}</LabelContainer>
      <TextContainer>{address.district}</TextContainer>
      <LabelContainer>{S.PROVINCE}</LabelContainer>
      <TextContainer>{address.province}</TextContainer>
      <LabelContainer>{S.POSTCODE}</LabelContainer>
      <TextContainer>{address.post_code}</TextContainer>
    </AddressContainer>
  </div>;
};

export default Address;