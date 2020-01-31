import React from "react";

export const CrossIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="0.355225"
      width="50"
      height="2"
      transform="rotate(45 2 0.355225)"
      fill="currentColor"
    />
    <rect
      y="35.3552"
      width="50"
      height="2"
      transform="rotate(-45 0 35.3552)"
      fill="currentColor"
    />
  </svg>
);
