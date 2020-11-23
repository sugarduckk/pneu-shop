import React from 'react';
import CardContainer from '../../layout/CardContainer';
import Button from '../../button/Button';
import { useSetState } from 'redux-wrapper/action';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';

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
  return <>
    {batches && batches.length > 0 &&
      batches.map(batch => {
        return batch.map(doc => {
          return <CardContainer key={doc.id}>
            <Card doc={doc} />
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