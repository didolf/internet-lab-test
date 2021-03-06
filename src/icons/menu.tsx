import React from "react";

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    {...props}
    width="50"
    height="13"
    viewBox="0 0 50 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="50" height="2" fill="currentColor" />
    <rect y="11" width="50" height="2" fill="currentColor" />
  </svg>
);
