import React from 'react';
import Button from 'shared-lib/button/Button';
import CardContainer from 'shared-lib/layout/CardContainer';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Space from 'shared-lib/layout/Space';
import KeyValueTable from 'shared-lib/ui/KeyValueTable';

const AddressCard = ({ address }) => {
  const data = React.useMemo(() => {
    const { address: add, tambon, district, province, post_code } = address;
    return [
      ['ที่อยู่', add],
      ['แขวง/ตำบล', tambon],
      ['เขต/อำเภอ', district],
      ['จังหวัด', province],
      ['เลขไปรษณีย์', post_code]
    ];
  }, [address]);
  return <CardContainer>
    <SimpleCard>
      <KeyValueTable data={data} />
      <RowLayout>
        <Space />
        <Button bg='red'>remove</Button>
      </RowLayout>
    </SimpleCard>
  </CardContainer>;
};

export default AddressCard;