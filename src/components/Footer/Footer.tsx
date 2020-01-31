import React from "react";
import { FooterLogoIcon } from "../../icons";

import "./assets/styles.css";
import cn from "classnames";

interface FooterProps {
  className?: string;
}
export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("Footer", className)}>
      <div className="Footer-Copyright">© Копирайт 2019</div>
      <FooterLogoIcon className="Footer-Logo" />
    </div>
  );
};
