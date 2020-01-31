import React from "react";

import "./assets/styles.css";
import cn from "classnames";

interface TextDecorationProps {
  className?: string;
  type?: "red" | "red-background";
  children?: string;
}

export const TextDecoration: React.FC<TextDecorationProps> = ({
  className,
  children,
  type
}) => {
  return (
    <span
      className={cn(
        "TextDecoration",
        {
          TextDecoration_red: type === "red",
          "TextDecoration_red-background": type === "red-background"
        },
        className
      )}
    >
      {children}
    </span>
  );
};
