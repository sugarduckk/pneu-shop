const validatePassword = password => {
  if (password.length < 6) {
    return 'Password is too short.';
  }
  return null;
};

export default validatePassword;