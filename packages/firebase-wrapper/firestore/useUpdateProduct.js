import React from 'react';
import { storage, fs } from '..';
import sourceToImage from 'shared-lib/util/sourceToImage';
import resizeImage from 'shared-lib/util/resizeImage';

const useUpdateProduct = () => {
  return React.useCallback(async (oldProduct, newProduct) => {
    const deleteIndexes = [];
    const uploadIndexes = [];
    const oldFileNames = oldProduct.images.map(i => i.name);
    const newFileNames = newProduct.images.map(f => f.name);
    oldFileNames.forEach((oldFileName, oldFileNameIndex) => {
      const foundIndex = newFileNames.indexOf(oldFileName);
      if (foundIndex < 0) {
        deleteIndexes.push(oldFileNameIndex);
      }
    });
    newFileNames.forEach((newFileName, newFileNameIndex) => {
      const foundIndex = oldFileNames.indexOf(newFileName);
      if (foundIndex < 0) {
        uploadIndexes.push(newFileNameIndex);
      }
    });

    const images = await Promise.all(uploadIndexes.map(uploadIndex => {
      return sourceToImage(newProduct.images[uploadIndex].src);
    }));
    const resizedImages = images.map(image => resizeImage(image, 1080, 1080, 0.7));
    const productRef = fs.collection('products').doc(oldProduct.id);
    const productStorageRef = storage.ref(`products/${oldProduct.id}`);
    const uploadPromises = resizedImages.map((resizedImage, resizedImageIndex) => {
      return productStorageRef.child(newFileNames[uploadIndexes[resizedImageIndex]]).putString(resizedImage, 'data_url');
    });
    const snapshots = await Promise.all(uploadPromises);
    const downloadUrlPromises = [];
    snapshots.forEach((snapshot) => {
      downloadUrlPromises.push(snapshot.ref.getDownloadURL());
    });
    const downloadUrls = await Promise.all(downloadUrlPromises);
    const newProductDoc = { ...newProduct };
    downloadUrls.forEach((downloadUrl, downloadUrlIndex) => {
      newProductDoc.images[uploadIndexes[downloadUrlIndex]].src = downloadUrl;
    });
    for (let key in newProductDoc) {
      if (JSON.stringify(newProductDoc[key]) === JSON.stringify(oldProduct[key])) {
        delete newProductDoc[key];
      }
    }
    await productRef.update(newProductDoc);
    const deletePromises = deleteIndexes.map(deleteIndex => {
      return productStorageRef.child(oldFileNames[deleteIndex]).delete();
    });
    return Promise.all(deletePromises);
  }, []);
};

export default useUpdateProduct;