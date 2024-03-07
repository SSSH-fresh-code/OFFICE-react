import { FunctionComponent, SVGProps } from "react";
import Home from "../assets/home.svg?react";
import Users from "../assets/members.svg?react";

export type Menu = {
  name: string,
  link: string,
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>,
  children?: Menu[]
}

export const menus: Menu[] = [
  {
    name: "Home",
    link: "/",
    icon: Home
  },
  {
    name: "Users",
    link: "/users",
    icon: Users
  }
]