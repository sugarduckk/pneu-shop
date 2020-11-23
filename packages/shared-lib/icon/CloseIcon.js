import * as React from "react";

const CloseIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
    >
      <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
      <path d="M8 17c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3z" />
      <path d="M16 17c-.3 0-.5-.1-.7-.3l-8-8c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
    </svg>
  );
};

export default CloseIcon;
