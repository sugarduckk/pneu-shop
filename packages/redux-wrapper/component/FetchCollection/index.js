import React from 'react';
import FetchSubsequentBatch from './FetchSubsequentBatch';
import FetchFirstBatch from './FetchFirstBatch';
import useGlobalState from '../../hook/useGlobalState';
import { useSetState } from '../../action';

const FetchCollection = ({ collectionName, query, limit }) => {
  const setState = useSetState();
  const collectionNameBatches = React.useMemo(() => collectionName + 'Batches', [collectionName]);
  const globalState = useGlobalState();
  const pageArray = React.useMemo(() => globalState[collectionName], [globalState, collectionName]);
  const batches = React.useMemo(() => globalState[collectionNameBatches], [globalState, collectionNameBatches]);
  React.useEffect(() => {
    if (!pageArray) {
      setState({
        [collectionName]: [0]
      });
    }
  }, [pageArray, setState, collectionName]);
  React.useEffect(() => {
    if (!batches) {
      setState({
        [collectionNameBatches]: [[]]
      });
    }
  }, [batches, setState, collectionNameBatches]);
  React.useEffect(() => {
    return () => {
      setState({
        [collectionName]: undefined,
        [collectionNameBatches]: undefined
      });
    };
  }, [setState, collectionName, collectionNameBatches]);
  return <>
    {pageArray && pageArray.length > 0 && pageArray.map(page => {
      if (page === 0) {
        return <FetchFirstBatch key={page} query={query} limit={limit} collectionNameBatches={collectionNameBatches} />;
      }
      return <FetchSubsequentBatch key={page} page={page} query={query} limit={limit} collectionNameBatches={collectionNameBatches} batches={batches} />;
    })}
  </>;
};

export default FetchCollection;