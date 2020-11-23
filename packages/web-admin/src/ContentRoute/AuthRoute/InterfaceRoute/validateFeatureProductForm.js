const validateFeatureProductForm = values => {
  const errors = {};
  if (values.productId.length === 0) {
    errors.productId = 'Product ID is empty.';
  }
  return errors;
};

export default validateFeatureProductForm;