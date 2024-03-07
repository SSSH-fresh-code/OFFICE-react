import React from 'react';
import style from './Header.module.css';
import { MenuProps } from '../../App';
import MenuSVG from "../../assets/menu.svg?react";

function MobileHeader({ setOpen }: MenuProps): React.ReactElement {
  return <header className={style["m-wrapper"]}>
    <div></div>
    <div className={style["m-home-btn"]}>
      <span>OFFICE</span>
    </div>
    <div className={style["m-menu-btn"]}>
      <div onClick={() => setOpen(true)}>
        <MenuSVG className={style["m-menu-svg"]} />
      </div>
    </div>

  </header>
}

export default MobileHeader;