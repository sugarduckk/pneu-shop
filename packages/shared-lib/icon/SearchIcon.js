import * as React from "react";

const SearchIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
    >
      <path d="M9 18c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zM9 2C5.1 2 2 5.1 2 9s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z" />
      <path d="M23 24c-.3 0-.5-.1-.7-.3l-8-8c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
    </svg>
  );
};

export default SearchIcon;
