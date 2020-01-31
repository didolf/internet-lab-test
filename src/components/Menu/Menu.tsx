import React, { useState, useCallback } from "react";
import {
  InstagramIcon,
  VkIcon,
  PhoneIcon,
  MenuIcon,
  CrossIcon
} from "../../icons";
import { MenuItem } from "./_menu-item";
import "./assets/styles.css";
import cn from "classnames";
import { Theme } from "../../helpers";
import { Typography } from "../Typography";

enum MenuState {
  EXPANDED = "EXPANDED",
  CLOSED = "CLOSED"
}

interface MenuProps {
  className?: string;
  theme?: Theme;
  state: MenuState;
  onChangeState: (state: MenuState) => void;
}

export const Menu: React.FC<MenuProps> = ({
  className,
  theme = Theme.LIGHT,
  onChangeState,
  state
}) => {
  const onChangeStateClick = useCallback(() => {
    onChangeState(
      state === MenuState.CLOSED ? MenuState.EXPANDED : MenuState.CLOSED
    );
  }, [onChangeState, state]);
  return (
    <div
      className={cn("Menu", className, {
        Menu_expanded: state === MenuState.EXPANDED,
        Menu_light: state !== MenuState.EXPANDED && theme === Theme.LIGHT,
        Menu_dark: theme === Theme.DARK || state === MenuState.EXPANDED
      })}
    >
      <div className="Menu-Contacts">
        <div className="Menu-Phone">
          <PhoneIcon className="Menu-PhoneIcon" />
          <Typography type="title">8 499 999 99 99</Typography>
        </div>
        <div className="Menu-Overlay">
          <div className="Menu-Items">
            <MenuItem>
              <Typography type="headline"> пункт меню 1</Typography>
            </MenuItem>
            <MenuItem>
              <Typography type="headline">пункт меню 2</Typography>
            </MenuItem>
            <MenuItem>
              <Typography type="headline">пункт меню 3</Typography>
            </MenuItem>
            <MenuItem>
              <Typography type="headline">пункт меню 4</Typography>
            </MenuItem>
            <MenuItem>
              <Typography type="headline">пункт меню 5</Typography>
            </MenuItem>
          </div>
        </div>
        <div className="Menu-SocialIcons">
          <InstagramIcon className="Menu-InstagramIcon" />
          <VkIcon className="Menu-VkIcon" />
        </div>
      </div>
      {state === MenuState.EXPANDED && (
        <CrossIcon className="Menu-ActionIcon" onClick={onChangeStateClick} />
      )}
      {state === MenuState.CLOSED && (
        <MenuIcon className="Menu-ActionIcon" onClick={onChangeStateClick} />
      )}
    </div>
  );
};
