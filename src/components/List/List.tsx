import React from "react";

import "./assets/styles.css";

import cn from "classnames";

interface ListItemProps {
  className?: string;
  dot?: React.ReactChild | React.ReactChild[];
  children: React.ReactChild | React.ReactChild[] | JSX.Element;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  dot,
  children
}) => {
  return (
    <div className={cn("List-Item ListItem", className)}>
      <div className={cn("ListItem-Dot", { "ListItem-Dot_default": !dot })}>
        {dot}
      </div>
      <div className="ListItem-Content">{children}</div>
    </div>
  );
};

interface ListProps {
  className?: string;
  children: React.ReactChild | React.ReactChild[];
  size: "m" | "l";
}
export const List: React.FC<ListProps> = ({ className, children, size }) => {
  return (
    <div
      className={cn(
        "List",
        { List_size_m: size === "m", List_size_l: size === "l" },
        className
      )}
    >
      {children}
    </div>
  );
};
