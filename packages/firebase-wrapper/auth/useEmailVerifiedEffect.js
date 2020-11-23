import React from 'react';
import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import { useSetState } from 'redux-wrapper/action';

const useEmailVerifiedEffect = () => {
  const { user, userDoc } = useGlobalState();
  const setState = useSetState();
  React.useEffect(() => {
    if (userDoc && userDoc.emailVerified) {
      user.reload()
        .then(() => {
          setState({
            user
          });
        });
    }
  }, [user, userDoc, setState]);
};

export default useEmailVerifiedEffect;