import DashBoardSVG from "../assets/dashboard.svg";

export type Menu = {
  name: string,
  link: string,
  icon?: string,
  children?: Menu[]
}

export const menus: Menu[] = [
  {
    name: "DashBoard",
    link: "/",
    icon: DashBoardSVG
  },
  {
    name: "about",
    link: "/about",
  }
]