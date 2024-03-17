import { Link } from "@tanstack/react-router"
import NotifyIcon from "../../../shared/icons/notify.icon"
import MenuLink from "./MenuLink"
import { menus } from "../../../shared/constant/menu.const"
import SvgIconBtn from "../../../shared/component/Button/SvgIconBtn"
import OfficeIcon from "../../../shared/icons/office.icon"


export default function Menu() {
  return (
    <div className={`
        hidden border-r bg-gray-100/40 h-full
        lg:block 
    `}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6 bg-gray-200">
          <Link className="flex items-end gap-2 font-semibold" to="/">
            <OfficeIcon />
            <div className="">OFFICE</div>
          </Link>
          <SvgIconBtn icon={NotifyIcon} alt="Notify Button" />
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {menus.map((m) => <MenuLink key={m.name} menu={m} />)}
          </nav>
        </div>
      </div>
    </div>
  )
}