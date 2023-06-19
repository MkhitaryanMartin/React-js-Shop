import React from "react";

function LinkedinIcon({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width  || "32"}
      height={height || "32"}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm8.2-2.7V24h3.4V13.3H8.2zM8 9.9c0 1.1.8 1.9 1.9 1.9 1.1 0 1.9-.8 1.9-1.9C11.8 8.8 11 8 9.9 8 8.9 8 8 8.8 8 9.9zM20.6 24h3.2v-6.6c0-3.3-2-4.4-3.9-4.4-1.7 0-2.9 1.1-3.2 1.8v-1.5h-3.2V24h3.4v-5.7c0-1.5 1-2.3 2-2.3s1.7.5 1.7 2.2V24z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export {LinkedinIcon};