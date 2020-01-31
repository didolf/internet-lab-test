import React from "react";

import "./assets/styles.css";
import cn from "classnames";

interface ButtonProps {
  className?: string;
  children?: string;
  type?: "red" | "grey";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type = "red",
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "Button",
        { Button_type_red: type === "red", Button_type_grey: type === "grey" },
        className
      )}
    >
      {children}
    </div>
  );
};
