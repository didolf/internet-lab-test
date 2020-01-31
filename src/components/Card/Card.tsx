import React from "react";

import "./assets/styles.css";
import cn from "classnames";
import { Typography } from "../Typography";

interface CardProps {
  className?: string;
  imgSrc: string;
  title: string;
  children?: string;
}
export const Card: React.FC<CardProps> = ({
  className,
  imgSrc,
  title,
  children
}) => {
  return (
    <div className={cn("Card", className)}>
      <div className="Card-Photo">
        <img className="Card-PhotoImg" src={imgSrc} />
      </div>
      <Typography type="bold" className="Card-Title">
        {title}
      </Typography>
      {children && (
        <Typography type="regular" className="Card-Description">
          {children}
        </Typography>
      )}
    </div>
  );
};
