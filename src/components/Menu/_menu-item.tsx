import React from "react";
import cn from "classnames";
import './assets/_menu-item.css';

interface MenuItemProps {
  className?: string;
  children?: React.ReactChild;
}

export const MenuItem: React.FC<MenuItemProps> = ({ className, children }) => (
  <div className={cn("Menu-Item", className)}>{children}</div>
);
