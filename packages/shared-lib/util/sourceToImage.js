const sourceToImage = src => {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error('Image cannot be loaded.'));
    };
    img.src = src;
  });
};

export default sourceToImage;