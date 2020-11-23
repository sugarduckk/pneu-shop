import React from 'react';
import useFirstBatchQuery from 'firebase-wrapper/firestore/useFirstBatchQuery';
import { useSetState } from '../../action';

const FetchFirstBatch = ({ query, limit, collectionNameBatches }) => {
  const setState = useSetState();
  const handleFirstBatch = React.useCallback(docs => {
    setState(preState => {
      const newBatch = [...preState[collectionNameBatches]];
      newBatch[0] = docs;
      return {
        [collectionNameBatches]: newBatch
      };
    });
  }, [collectionNameBatches, setState]);
  useFirstBatchQuery(query, limit, handleFirstBatch);
  return null;
};

export default FetchFirstBatch;