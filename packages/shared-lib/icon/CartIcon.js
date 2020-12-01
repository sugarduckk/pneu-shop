import * as React from "react";

const CartIcon = ({ fill, ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
      {...otherProps}
    >
      <path d="M19 13H4c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h17c.3 0 .6.1.8.4.2.2.2.5.2.8l-2 9c-.1.5-.5.8-1 .8zM5 11h13.2l1.6-7H5v7z" />
      <path d="M4 4H1c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
      <path d="M4 4c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.4-.4 1-.4 1.4 0 .2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3z" />
      <circle cx={6} cy={20} r={2} />
      <circle cx={17} cy={20} r={2} />
      <path d="M4 17c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z" />
      <path d="M19 17H4c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1z" />
    </svg>
  );
};

export default CartIcon;
