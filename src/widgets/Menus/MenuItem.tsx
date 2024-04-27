import { MenusIconFactory } from "./MenusIconFactoryProps";
import { ParentMenuListItem } from "../../shared/types/menus";

interface MenuItemProps {
  menu: ParentMenuListItem;
  setMenu: (m: ParentMenuListItem) => void;
  isSelected: boolean;
}

export default function ParentMenuItem({
  menu,
  setMenu,
  isSelected,
}: MenuItemProps) {
  const { name, icon = -1 } = menu;
  return (
    <div className="border-gray-100 shadow-sm w-full cursor-pointer">
      <div
        className={
          "p-3 hover:bg-gray-200 rounded-lg " + (isSelected && " bg-gray-100")
        }
        onClick={() => {
          setMenu(menu);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <MenusIconFactory iconName={icon} />
            <span className="ml-2 font-semibold text-gray-800">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
