const HEADERS = ["id", "name", "category", "brand", "details", "in_stock"];

const validateCSV = (data) => {
  if (JSON.stringify(data[0]) !== JSON.stringify(HEADERS)) {
    return {
      valid: false,
      error: "Headers are invalid."
    };
  }
  const rowCount = data.length;
  if (rowCount < 2) {
    return {
      valid: false,
      error: "No data."
    };
  }
  for (let row = 1; row < rowCount; row++) {
    for (let col = 0; col < HEADERS.length; col++) {
      if (data[row][col].length === 0) {
        return {
          valid: false,
          error: `Column ${HEADERS[col]}, Row ${row + 1} is empty`
        };
      }
    }
  }
  return {
    valid: true
  };
};

export default validateCSV;