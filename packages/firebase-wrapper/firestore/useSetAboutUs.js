import { storage, fs } from '..';
import React from 'react';
import resizeImage from 'shared-lib/util/resizeImage';
import sourceToImage from 'shared-lib/util/sourceToImage';

const useSetAboutUs = () => {
  return React.useCallback(async (newAboutUs, oldAboutUs) => {
    const uploadIndexes = [];
    const deleteIndexes = [];
    const newFileNames = newAboutUs.images.map(f => f.name);
    var oldFileNames = [];
    if (oldAboutUs) {
      oldFileNames = oldAboutUs.images.map(i => i.name);
      oldFileNames.forEach((oldFileName, oldFileNameIndex) => {
        const foundIndex = newFileNames.indexOf(oldFileName);
        if (foundIndex < 0) {
          deleteIndexes.push(oldFileNameIndex);
        }
      });
    }
    newFileNames.forEach((newFileName, newFileNameIndex) => {
      const foundIndex = oldFileNames.indexOf(newFileName);
      if (foundIndex < 0) {
        uploadIndexes.push(newFileNameIndex);
      }
    });

    const images = await Promise.all(uploadIndexes.map(uploadIndex => {
      return sourceToImage(newAboutUs.images[uploadIndex].src);
    }));
    const resizedImages = images.map(image => resizeImage(image, 1080, 1080, 0.7));
    const aboutUsRef = fs.collection('config').doc('aboutUs');
    const aboutUsStorageRed = storage.ref(`config/aboutUs`);
    const uploadPromises = resizedImages.map((resizedImage, resizedImageIndex) => {
      return aboutUsStorageRed.child(newFileNames[uploadIndexes[resizedImageIndex]]).putString(resizedImage, 'data_url');
    });
    const snapshots = await Promise.all(uploadPromises);
    const downloadUrlPromises = [];
    snapshots.forEach((snapshot) => {
      downloadUrlPromises.push(snapshot.ref.getDownloadURL());
    });
    const downloadUrls = await Promise.all(downloadUrlPromises);
    const newAboutUsDoc = { ...newAboutUs };
    downloadUrls.forEach((downloadUrl, downloadUrlIndex) => {
      newAboutUsDoc.images[uploadIndexes[downloadUrlIndex]].src = downloadUrl;
    });
    if (oldAboutUs) {
      for (let key in newAboutUsDoc) {
        if (JSON.stringify(newAboutUsDoc[key]) === JSON.stringify(oldAboutUs[key])) {
          delete newAboutUsDoc[key];
        }
      }
    }
    await aboutUsRef.set(newAboutUsDoc, {
      merge: true
    });
    const deletePromises = deleteIndexes.map(deleteIndex => {
      return aboutUsStorageRed.child(oldFileNames[deleteIndex]).delete();
    });
    return Promise.all(deletePromises);
  }, []);
};

export default useSetAboutUs;