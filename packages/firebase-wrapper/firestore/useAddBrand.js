import React from 'react';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';
import { fs, storage } from '..';

const useAddBrand = () => {
  return React.useCallback(async brand => {
    const { value, label, logo } = brand;
    const brandRef = fs.collection('brands').doc(value);
    await fs.runTransaction(async transaction => {
      const brandDoc = await transaction.get(brandRef);
      if (brandDoc.exists) {
        throw Error('Brand exists');
      }
      transaction.set(brandRef, {
        value, label, logo: '', amount: 0
      });
    });
    const image = await sourceToImage(logo.src);
    const resizedImage = resizeImage(image, 512, 512, 0.7);
    const snapshot = await storage.ref(`brands/${value}`).child('logo.jpeg').putString(resizedImage, 'data_url');
    const downloadUrl = await snapshot.ref.getDownloadURL();
    return brandRef.update({
      logo: downloadUrl
    });
  }, []);
};

export default useAddBrand;