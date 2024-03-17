import { Link } from "@tanstack/react-router"
import LogoutIcon from "../../../shared/icons/notify.icon"
import MenuLink from "./MenuLink"
import { menus } from "../../../shared/constant/menu.const"
import SvgIconBtn from "../../../shared/component/Button/SvgIconBtn"
import OfficeIcon from "../../../shared/icons/office.icon"
import useLogout from "../../../data/Auth/useLogout.hook"


export default function Menu() {

  return (
    <div className={`
        border-r bg-gray-100/40 h-full
    `}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6 bg-gray-200 justify-between">
          <Link className="flex items-end gap-2 font-semibold" to="/">
            <OfficeIcon />
            <div className="">OFFICE</div>
          </Link>
          <SvgIconBtn onClick={useLogout()} icon={LogoutIcon} alt="Notify Button" />
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium ">
            {
              menus.map((m) => {
                return <MenuLink key={m.name} menu={m} />
              })
            }
          </nav>
        </div>
      </div>
    </div>
  )
}