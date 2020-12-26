import * as React from "react";

const ShapesIcon = ({ fill, ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
      {...otherProps}
    >
      <path d="M16 24H4c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l6-9c.4-.6 1.3-.6 1.7 0l5.9 8.9c.2.2.3.4.3.7 0 .5-.4.9-1 .9zM5.9 22h8.3L10 15.8 5.9 22zM23 17h-8c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1zm-7-2h6V9h-6v6zM6.5 13C2.9 13 0 10.1 0 6.5S2.9 0 6.5 0 13 2.9 13 6.5 10.1 13 6.5 13zm0-11C4 2 2 4 2 6.5S4 11 6.5 11 11 9 11 6.5 9 2 6.5 2z" />
    </svg>
  );
};

export default ShapesIcon;
