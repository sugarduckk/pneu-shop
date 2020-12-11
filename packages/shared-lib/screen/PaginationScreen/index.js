import React from 'react';
import CardContainer from '../../layout/CardContainer';
import Button from '../../button/Button';
import { useSetState } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import LoadingContent from '../../../web-client/src/ContentRoute/AuthRoute/LoadingContent';
import SimpleCard from '../../layout/SimpleCard';

const PaginationScreen = ({ Card, collectionName, limit }) => {
  const { [collectionName + 'Batches']: batches } = useGlobalState();
  const setState = useSetState();
  const loadMore = React.useCallback(e => {
    setState(preState => {
      return {
        ...preState,
        [collectionName]: [...preState[collectionName], preState[collectionName].length],
        [collectionName + 'Batches']: [...preState[collectionName + 'Batches'], []]
      };
    });
  }, [setState, collectionName]);
  // batches not loaded
  if (batches === undefined) {
    return <LoadingContent />
  }
  // batches loaded
  if (batches[0].length === 0) {
    return <SimpleCard>No record(s)</SimpleCard>
  }
  return <>
    {batches.map(batch => {
      return batch.map(doc => {
        return <CardContainer key={doc.id}>
          <Card doc={doc.data()} id={doc.id} />
        </CardContainer>;
      });
    })
    }
    <CardContainer>
      {batches && batches[batches.length - 1].length === limit && <Button onClick={loadMore}>load more</Button>}
    </CardContainer>
  </>;
};

export default PaginationScreen;