import React from "react";
import UsersIcon from "../icons/users.icon";
import DashboardIcon from "../icons/dashboard.icon";

export type Menu = {
  name: string,
  link?: string,
  icon: React.ReactNode,
  children?: Omit<Menu, "children" | "icon">[]
}

export const home: Menu = {
  name: "통계",
  link: "/",
  icon: DashboardIcon()
}
export const users: Menu = {
  name: "직원 관리",
  icon: UsersIcon(),
  children: [
    {
      name: "직원 목록",
      link: "/users",
    },
    {
      name: "미승인 직원 목록",
      link: "/users/cert",
    }
  ]
}


export const menus: Menu[] = [
  home, users
]