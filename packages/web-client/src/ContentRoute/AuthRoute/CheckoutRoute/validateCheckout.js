const validateCheckout = ({ to, tel, address, paymentSlips }) => {
  var errors = {};
  if (to.trim().length === 0) {
    errors.to = `'To' cannot be blank.`;
  }
  if (tel.trim().length === 0) {
    errors.tel = `'Tel' cannot be blank.`;
  }
  if (!address) {
    errors.address = 'Please add address.';
  }
  if (paymentSlips.length === 0) {
    errors.paymentSlips = 'Please upload payment slip(s).';
  }
  return errors;
};

export default validateCheckout;