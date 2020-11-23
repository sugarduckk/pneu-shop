import React from 'react';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';
import { fs, storage } from '..';

const useAddSingleItem = () => {
  return React.useCallback(async values => {
    const { images } = values;
    const productRef = fs.collection('products').doc(values.id);
    await fs.runTransaction(async transaction => {
      const productDoc = await transaction.get(productRef);
      if (productDoc.exists) {
        throw Error(`Product [${values.id}] already exists.`);
      }
      transaction.set(productRef, {
        ...values,
        images: []
      });
    });
    const imgs = await Promise.all(images.map(file => {
      return sourceToImage(file.src);
    }));
    const resizedImages = imgs.map(image => resizeImage(image, 1080, 1080, 0.7));
    const productStorageRef = storage.ref(`products/${values.id}`);
    const uploadImagePromises = resizedImages.map((resizedImage, index) => {
      return productStorageRef.child(images[index].name).putString(resizedImage, 'data_url');
    });
    const snapshots = await Promise.all(uploadImagePromises);
    const downloadUrlPromises = [];
    snapshots.forEach((snapshot) => {
      downloadUrlPromises.push(snapshot.ref.getDownloadURL());
    });
    const downloadUrls = await Promise.all(downloadUrlPromises);
    return productRef.update({
      images: downloadUrls.map((src, srcIndex) => {
        return {
          src,
          name: images[srcIndex].name
        };
      })
    });
  }, []);
};

export default useAddSingleItem;