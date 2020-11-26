import React from 'react';
import { fs, storage } from '..';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';

const useAddCategory = () => {
  return React.useCallback(async cat => {
    const { value, label, files } = cat;
    const imagePromises = files.map(file => {
      return sourceToImage(file.src);
    });
    const catRef = fs.collection('cats').doc(cat.value);
    await fs.runTransaction(transaction => {
      return transaction.get(catRef).then(catDoc => {
        if (catDoc.exists) {
          throw Error('Category exists');
        }
        transaction.set(catRef, {
          value,
          label,
          images: [],
          amount: 0
        });
      });
    });
    const images = await Promise.all(imagePromises);
    const resizedImages = images.map(image => resizeImage(image, 1080, 1080, 0.7));
    const uploadImagePromises = resizedImages.map((resizedImage, index) => {
      const productRef = storage.ref(`cats/${value}`);
      return productRef.child(files[index].name).putString(resizedImage, 'data_url');
    });
    const snapshots = await Promise.all(uploadImagePromises);
    const downloadUrlPromises = [];
    snapshots.forEach((snapshot) => {
      downloadUrlPromises.push(snapshot.ref.getDownloadURL());
    });
    const downloadUrls = await Promise.all(downloadUrlPromises);
    return catRef.update({
      images: downloadUrls.map((src, srcIndex) => {
        return {
          src,
          name: files[srcIndex].name
        };
      })
    });
  }, []);
};

export default useAddCategory;