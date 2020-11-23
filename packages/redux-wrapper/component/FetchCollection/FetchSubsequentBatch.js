import React from 'react';
import useSubsequentBatchQuery from 'firebase-wrapper/firestore/useSubsequentBatchQuery';
import { useSetState } from '../../action';

const FetchSubsequentBatch = ({ page, batches, query, limit, collectionNameBatches }) => {
  const setState = useSetState();
  const handleSubsequentBatch = React.useCallback(docs => {
    setState(preState => {
      const newBatch = [...preState[collectionNameBatches]];
      newBatch[page] = docs;
      return {
        [collectionNameBatches]: newBatch
      };
    });
  }, [page, collectionNameBatches, setState]);
  const lastRef = React.useMemo(() => {
    const prePage = page - 1;
    const length = batches[prePage].length;
    return batches[prePage][length - 1];
  }, [batches, page]);
  useSubsequentBatchQuery(query, limit, lastRef, handleSubsequentBatch);
  return null;
};

export default FetchSubsequentBatch;