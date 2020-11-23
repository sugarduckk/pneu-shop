import React from 'react';

const useFirstBatchQuery = (query, limit, handleFirstBatch) => {
  return React.useEffect(() => {
    console.log('fetch first batch');
    return query.limit(limit)
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          var temp = [];
          snapshot.forEach(doc => {
            temp.push(doc);
          });
          handleFirstBatch(temp);
        }
        else {
          handleFirstBatch([]);
        }
      });
  }, [query, limit, handleFirstBatch]);
};

export default useFirstBatchQuery;