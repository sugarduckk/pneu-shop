const validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(String(email).toLowerCase())) {
    return 'Email is invalid';
  }
  return null;
};

export default validateEmail;