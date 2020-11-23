import React from "react";

const GearIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
    >
      <path d="M14.1 23.9l-.1-1.2c-.1-1-1-1.7-2-1.7s-1.8.7-2 1.7l-.2 1.1-1.1-.3c-1.9-.5-3.7-1.6-5.2-3l-.8-.8.9-.7c.8-.6 1-1.7.5-2.6-.5-.8-1.6-1.2-2.5-.9l-1.1.4-.1-.9c-.3-1-.4-2-.4-3s.1-2 .4-3l.3-1.1 1.1.4c.9.4 2 0 2.5-.9s.3-2-.5-2.6l-1-.6.8-.8C5.1 2 6.8 1 8.8.4L9.9.1l.1 1.2c.1 1 1 1.7 2 1.7s1.8-.7 2-1.7l.2-1.1 1.1.3c1.9.5 3.7 1.6 5.2 3l.8.8-.9.7c-.8.6-1 1.7-.5 2.6.4.6 1 1 1.7 1 .3 0 .5 0 .7-.1l1.1-.4.2.9c.2 1 .4 2 .4 3s-.1 2-.4 3l-.3 1.1-1.1-.4c-.9-.4-2 0-2.5.9s-.3 2 .5 2.6l.9.7-.8.8c-1.4 1.4-3.2 2.4-5.2 3l-1 .2zM12 19c1.6 0 3 .9 3.6 2.3.9-.4 1.8-.9 2.6-1.5-.9-1.2-1-2.9-.2-4.3.8-1.3 2.3-2.1 3.8-2 .2-.5.2-1 .2-1.5s0-1-.1-1.5h-.4c-1.4 0-2.8-.8-3.5-2-.8-1.4-.7-3.1.2-4.3-.8-.6-1.7-1.2-2.6-1.5C15 4.1 13.6 5 12 5s-3-.9-3.6-2.3c-1 .3-1.9.9-2.7 1.5.9 1.2 1 2.9.2 4.3-.8 1.3-2.3 2.1-3.8 2-.1.5-.1 1-.1 1.5s0 1 .1 1.5c1.5-.1 3 .6 3.8 2 .8 1.4.7 3.1-.2 4.3.8.6 1.7 1.2 2.6 1.5C9 19.9 10.4 19 12 19z"></path>
      <path d="M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  );
};

export default GearIcon;
