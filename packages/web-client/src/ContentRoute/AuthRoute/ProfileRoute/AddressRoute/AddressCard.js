import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
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
  return <SimpleCard>
    <KeyValueTable data={data} />
  </SimpleCard>;
};

export default AddressCard;