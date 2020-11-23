import React from 'react';
import { fs, storage } from '..';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';

const useUpdateCatImages = () => {
  return React.useCallback(async (catId, imgs, preImages) => {
    const imagePromise = imgs.map(file => {
      return sourceToImage(file.src);
    });
    const images = await Promise.all(imagePromise);
    const resizedImages = images.map(image => resizeImage(image, 512, 512, 0.7));
    const uploadImagePromises = resizedImages.map((resizedImage, index) => {
      const productRef = storage.ref(`cats/${catId}`);
      return productRef.child(imgs[index].name).putString(resizedImage, 'data_url');
    });
    const snapshots = await Promise.all(uploadImagePromises);
    const downloadUrlPromises = [];
    snapshots.forEach((snapshot) => {
      downloadUrlPromises.push(snapshot.ref.getDownloadURL());
    });
    const downloadUrls = await Promise.all(downloadUrlPromises);
    return fs.collection('cats').doc(catId).update({
      images: downloadUrls.map((src, srcIndex) => {
        return {
          src,
          name: imgs[srcIndex].name
        };
      })
    })
      .then(() => {
        const productRef = storage.ref(`cats/${catId}`);
        const deletePromises = preImages.map(preImg => {
          return productRef.child(preImg.name).delete();
        });
        return Promise.all(deletePromises);
      });
  }, []);
};

export default useUpdateCatImages;