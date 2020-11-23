import React from 'react';

const useSubsequentBatchQuery = (query, limit, lastRef, handleSubsequentBatch) => {
  return React.useEffect(() => {
    console.log('fetch subsequent batch', lastRef.id);
    return query.startAfter(lastRef).limit(limit)
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          var temp = [];
          snapshot.forEach(doc => {
            temp.push(doc);
          });
          handleSubsequentBatch(temp);
        }
      });
  }, [query, limit, handleSubsequentBatch, lastRef]);
};

export default useSubsequentBatchQuery;