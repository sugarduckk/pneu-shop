const errorToMessage = error => {
  return `
    Error code: ${error.code}
    Error message: ${error.message}
  `;
};

export default errorToMessage;