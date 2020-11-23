import * as React from "react";

const Placeholder = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 522 522"
      overflow="hidden"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M379 99h522v522H379z" />
        </clipPath>
        <clipPath id="prefix__b">
          <path d="M543 263h194v194H543z" />
        </clipPath>
        <clipPath id="prefix__c">
          <path d="M543 263h194v194H543z" />
        </clipPath>
        <clipPath id="prefix__d">
          <path d="M543 263h194v194H543z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)" transform="translate(-379 -99)">
        <path fill="transparent" d="M380 100h520v520H380z" />
        <g clipPath="url(#prefix__b)">
          <g clipPath="url(#prefix__c)">
            <g clipPath="url(#prefix__d)">
              <path
                fill="#D9D9D9"
                d="M715 269H565c-12 0-22 10-22 22v138c0 12 10 22 22 22h150c12 0 22-10 22-22V291c0-12-10-22-22-22zm-47 33a21 21 0 110 42 21 21 0 010-42zm40 129H575c-6 0-9-5-6-10l36-72c3-5 8-6 12-1l36 48c4 5 10 5 14 1l9-9c4-4 10-4 14 1l23 33c3 5 1 9-5 9z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Placeholder;
