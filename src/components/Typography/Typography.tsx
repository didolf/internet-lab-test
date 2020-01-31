import React from "react";

import "./assets/styles.css";
import cn from "classnames";

type TypographyType =
  | "regular"
  | "bold"
  | "h3"
  | "h2"
  | "h1"
  | "headline"
  | "title"
  | "big-title"
  | "caption";

interface TypographyProps {
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
  type: TypographyType;
  center?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  className,
  children,
  type = "regular",
  center
}) => {
  return (
    <div
      className={cn(
        "Typography",
        {
          Typography_regular: type === "regular",
          Typography_bold: type === "bold",
          Typography_h2: type === "h2",
          Typography_h1: type === "h1",
          Typography_h3: type === "h3",
          Typography_headline: type === "headline",
          Typography_title: type === "title",
          "Typography_big-title": type === "big-title",
          Typography_caption: type == "caption",
          Typography_center: center
        },
        className
      )}
    >
      {children}
    </div>
  );
};
