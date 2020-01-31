import React from "react";

export const RussiaIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
        fill="#F0F0F0"
      />
      <path
        d="M21.3158 14.826C21.758 13.6343 22 12.3454 22 10.9999C22 9.65437 21.758 8.36548 21.3158 7.17383H0.684191C0.242043 8.36548 0 9.65437 0 10.9999C0 12.3454 0.242043 13.6343 0.684191 14.826L11 15.7825L21.3158 14.826Z"
        fill="#0052B4"
      />
      <path
        d="M10.9982 22.0001C15.7278 22.0001 19.7598 19.015 21.314 14.8262H0.682373C2.2366 19.015 6.26857 22.0001 10.9982 22.0001Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
