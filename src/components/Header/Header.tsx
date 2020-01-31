import React, { useState } from "react";
import { Menu } from "../";
import { Theme } from "../../helpers";

import "./assets/styles.css";
import cn from "classnames";

enum MenuState {
  EXPANDED = "EXPANDED",
  CLOSED = "CLOSED"
}
interface HeaderProps {
  className?: string;
  theme?: Theme;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  theme = Theme.LIGHT
}) => {
  const [state, setState] = useState(MenuState.CLOSED);

  return (
    <header
      className={cn(
        "Header",
        {
          Header_dark:
            state === MenuState.EXPANDED ||
            theme === Theme.DARK,
          Header_light: theme === Theme.LIGHT && state !== MenuState.EXPANDED
        },
        className
      )}
    >
      <div className="Header-Logo">
        <img
          className="Header-LogoImg"
          src={theme === Theme.LIGHT && state !== MenuState.EXPANDED ? "/light-logo.png" : "/dark-logo.png"}
        />
      </div>
      <Menu
        className="Header-Menu"
        state={state}
        onChangeState={setState}
        theme={state === MenuState.EXPANDED ? Theme.DARK : theme}
      />
    </header>
  );
};
