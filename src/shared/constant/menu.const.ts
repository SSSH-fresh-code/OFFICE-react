import React from "react";
import UsersIcon from "../icons/users.icon";
import DashboardIcon from "../icons/dashboard.icon";
import AlarmsIcon from "../icons/alarms.icon";
import LockIcon from "../icons/lock.icon";

export type Menu = {
  name: string,
  link?: string,
  icon: React.ReactNode,
  children?: Omit<Menu, "children" | "icon">[]
}

export const home: Menu = {
  name: "Home",
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
export const alarms: Menu = {
  name: "알람 관리",
  icon: AlarmsIcon(),
  children: [
    {
      name: "알람 목록",
      link: "/alarms"
    },
    {
      name: "알람 생성",
      link: "/alarms/create",
    }
  ]
}

export const auths: Menu = {
  name: "권한 관리",
  icon: LockIcon(),
  children: [
    {
      name: "권한 목록",
      link: "/auths"
    },
    {
      name: "유저별 권한 관리",
      link: "/auths/users"
    },
    {
      name: "알람별 권한 관리",
      link: "/auths/alarms",
    }
  ]
}
export const menus: Menu[] = [
  home, users, alarms, auths
]