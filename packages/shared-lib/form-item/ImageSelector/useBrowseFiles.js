import React from 'react';

const useBrowseFiles = (multiple, accept, onChange) => {
  return React.useCallback(e => {
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = multiple;
    input.accept = accept;
    input.onchange = onChange;
    input.click();
  }, [accept, onChange, multiple]);
};

export default useBrowseFiles;