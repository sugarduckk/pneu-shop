import React from 'react';
import { fs, storage } from '..';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';

const useUpdateBrandLogo = () => {
  return React.useCallback(async (brandId, logo) => {
    const image = await sourceToImage(logo.src);
    const resizedImage = resizeImage(image, 512, 512, 0.7);
    const snapshot = await storage.ref(`brands/${brandId}`).child('logo.jpeg').putString(resizedImage, 'data_url');
    const downloadUrl = await snapshot.ref.getDownloadURL();
    return fs.collection('brands').doc(brandId).update({
      logo: downloadUrl
    });
  }, []);
};

export default useUpdateBrandLogo;