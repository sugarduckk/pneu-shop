import React from 'react';
import Button from 'shared-lib/button/Button';
import Para from 'shared-lib/form-item/Para';
import RowLayout from 'shared-lib/layout/RowLayout';
import SimpleCard from 'shared-lib/layout/SimpleCard';

const DownloadButton = ({ slip, index }) => {
  const onClick = React.useCallback(() => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
      var blobUrl = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.download = slip.name;
      link.href = blobUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    xhr.open('GET', slip.src);
    xhr.send();
  }, [slip.src, slip.name]);
  return <Button onClick={onClick}>{`slip ${index + 1}`}</Button>;
};

const PaymentSlipCard = ({ slips }) => {
  return <SimpleCard>
    <RowLayout>
      {slips.map((slip, index) => {
        return <DownloadButton slip={slip} index={index} key={index} />;
      })}
    </RowLayout>
  </SimpleCard>;
};

export default PaymentSlipCard;