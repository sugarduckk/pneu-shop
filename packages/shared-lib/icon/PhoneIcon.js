import React from "react";

const PhoneIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
    >
      <path d="M18 23.2c-1.4 0-3-.4-4.8-1.3-2.2-1.1-4.4-2.7-6.5-4.8-2-2-3.7-4.3-4.8-6.5-1.7-3.5-1.8-6.4-.1-8 .4-.4 1-.4 1.4 0s.4 1 0 1.4c-1 1-.8 3.2.5 5.8 1 2 2.5 4.1 4.4 6s4 3.4 6 4.4c2.6 1.3 4.8 1.5 5.8.5.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.8.7-1.9 1.1-3.3 1.1z" />
      <path d="M7.8 10.7c-.4 0-.7-.2-.9-.6-.3-.5-.1-1.1.4-1.3l2.3-1.1c.4-.2.9-.7.8-1.3 0-.3-.2-.5-.4-.7L6.7 2.3c-.3-.3-.8-.4-1.3-.3l-.6.3L3.2 4c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L3.4 1c.4-.4.9-.7 1.4-.8C6-.1 7.2.2 8.1 1l3.3 3.3c.5.5.8 1.2.9 1.9.2 1.3-.6 2.7-1.9 3.4l-2.3 1.1c0-.1-.2 0-.3 0zM20.5 22.3c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.6-1.6c.2-.2.3-.3.3-.6.1-.5 0-1-.3-1.3l-3.3-3.3c-.2-.2-.5-.3-.7-.4-.6-.1-1.1.3-1.3.8L15 16.5c-.2.5-.8.7-1.3.4-.5-.2-.7-.8-.4-1.3l1.1-2.3c.7-1.3 2-2.1 3.4-1.9.7.1 1.3.4 1.8.9l3.3 3.3c.9.9 1.2 2.1.8 3.3-.2.5-.4 1-.8 1.4L21.2 22c-.2.2-.4.3-.7.3z" />
      <path d="M14.1 17c-.2 0-.4-.1-.6-.2-1.2-.9-2.4-1.9-3.6-3-1.2-1.2-2.2-2.4-3-3.6-.3-.4-.2-1 .3-1.4.5-.3 1.1-.2 1.4.2.8 1.1 1.7 2.3 2.8 3.3s2.2 2 3.3 2.8c.5.3.6.9.2 1.4-.1.4-.4.5-.8.5z" />
    </svg>
  );
};

export default PhoneIcon;
