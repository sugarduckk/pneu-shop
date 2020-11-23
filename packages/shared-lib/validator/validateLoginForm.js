import validateEmail from './validateEmail';
import validatePassword from './validatePassword';

const validateLoginForm = ({ email, password }) => {
  const errors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  for (let key in errors) {
    if (!errors[key]) {
      delete errors[key];
    }
  }
  return errors;
};

export default validateLoginForm;