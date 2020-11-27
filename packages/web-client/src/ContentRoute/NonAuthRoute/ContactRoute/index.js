import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import H1 from 'shared-lib/form-item/H1';
import { ContentContainer } from 'shared-lib/layout';
import CardContainer from 'shared-lib/layout/CardContainer';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import KeyValueTable from 'shared-lib/ui/KeyValueTable';

const ContactRoute = props => {
  const { config } = useGlobalState();
  const data = React.useMemo(() => {
    return [
      ['Telephone', config.contact.tel],
      ['Email', config.contact.email],
      ['Line', config.contact.line],
      ['Address', config.contact.address],
      ['Facebook', config.contact.facebook]
    ];
  }, [config.contact]);
  return <ContentContainer>
    <H1>Contact</H1>
    <CardContainer>
      <SimpleCard>
        <KeyValueTable data={data} />
      </SimpleCard>
    </CardContainer>
  </ContentContainer>;
};

export default ContactRoute;