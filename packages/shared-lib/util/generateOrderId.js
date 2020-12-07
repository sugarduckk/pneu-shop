const ID_LENGTH = 8;

const generateOrderId = () => {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < ID_LENGTH; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
};

export default generateOrderId;