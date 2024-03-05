import MainStyle from "./Main.module.css";
import React from "react";

function Main(props): React.ReactElement {
  return <div className={MainStyle["main-wrapper"]}>
    {props.children}
  </div>;
}

export default Main;