import React from "react";

function PinterestIcon({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "32"}
      height={height || "32"}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm8 0c0-4.4 3.6-8 8-8s8 3.6 7.9 7.6c0 4.4-3.6 8-8 8-.8 0-1.6-.1-2.3-.3.3-.5.6-1.1.8-1.7.1-.4.6-2.2.6-2.2.3.5 1.1 1 2 1 2.6 0 4.3-2.4 4.3-5.5 0-2.4-2-4.6-5.1-4.6-3.8 0-5.7 2.7-5.7 5 0 1.4.5 2.6 1.6 3.1.2.1.3 0 .4-.2.1-.1.2-.5.2-.6.07-.141.041-.183-.017-.266-.024-.034-.054-.075-.083-.134-.3-.4-.5-.9-.5-1.6 0-2 1.5-3.8 3.9-3.8 2.1 0 3.3 1.3 3.3 3.1 0 2.4-1 4.3-2.5 4.3-.9 0-1.5-.7-1.3-1.5.084-.417.22-.852.35-1.268.18-.58.35-1.124.35-1.532 0-.7-.4-1.2-1.1-1.2-.8 0-1.5.9-1.5 2.1 0 .8.3 1.3.3 1.3s-.8 3.7-1 4.4c-.1.6-.1 1.2-.1 1.8C10 22.1 8 19.3 8 16z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export {PinterestIcon};