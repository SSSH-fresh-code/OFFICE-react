import { FunctionComponent, SVGProps } from "react";
import UsersIcon from "../icons/users.icon";
import DashboardIcon from "../icons/dashboard.icon";

export type Menu = {
  name: string,
  link: string,
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  // children?: Menu[]
}

export const home: Menu = {
  name: "통계",
  link: "/",
  icon: DashboardIcon
}
export const users: Menu = {
  name: "직원 관리",
  link: "/users",
  icon: UsersIcon
}

export const menus: Menu[] = [
  home, users
]