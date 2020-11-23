import React from 'react';
import { fs } from '..';

const useCollection = (path, handleDocs) => {
  React.useEffect(() => {
    return fs.collection(path).onSnapshot(snapshot => {
      handleDocs(snapshot.empty ? [] : snapshot.docs);
    });
  }, [path, handleDocs]);
};

export default useCollection;