import React from "react";

const HomeIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={fill || 'white'}
    >
      <path d="M19 24H5c-.6 0-1-.4-1-1v-9H1c-.4 0-.8-.2-.9-.6-.2-.4-.1-.8.2-1.1l11-12c.4-.4 1.1-.4 1.5 0l11 12c.3.3.3.7.2 1.1-.2.4-.6.6-1 .6h-3v9c0 .6-.4 1-1 1zM6 22h12v-9c0-.6.4-1 1-1h1.7L12 2.5 3.3 12H5c.6 0 1 .4 1 1v9z"></path>
      <path d="M14 24h-4c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1zm-3-2h2v-4h-2v4zM12 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"></path>
    </svg>
  );
};

export default HomeIcon;
