import React from 'react';
const { fs } = require("..");

const useSetContact = () => {
  return React.useCallback(contacts => {
    return fs.collection('config').doc('contact').set(contacts, {
      merge: true
    });
  }, []);
};

export default useSetContact;