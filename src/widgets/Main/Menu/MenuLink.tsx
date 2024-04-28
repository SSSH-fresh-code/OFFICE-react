import { Link } from "@tanstack/react-router";
import { TMenu } from "@sssh-fresh-code/types-sssh";
import { MenusIconFactory } from "../../Menus/MenusIconFactoryProps";

interface MenuLinkProps {
  menu: TMenu;
}

export default function MenuLink({ menu }: MenuLinkProps) {
  const child = menu.childMenus || [];
  return (
    <>
      <div
        className="
            flex items-center gap-3 mt-1 cursor-pointer 
            rounded-tr-lg rounded-tl-lg bg-gray-200 
            px-3 py-2 text-gray-900  
            transition-all hover:text-gray-900 hover:bg-gray-300
          "
      >
        {menu.icon && <MenusIconFactory iconName={menu.icon} />}
        {menu.name}
      </div>
      {child.map((c, idx) => {
        return (
          <Link
            key={`${menu.name}-${idx}`}
            to={c.link}
            className={`
                    ${menu.childMenus?.length === idx + 1 ? "rounded-br-lg rounded-bl-lg" : ""} 
                    flex items-center gap-3 text-[12px] bg-gray-100 
                    pl-11 py-2 text-gray-900
                    transition-all hover:text-gray-900 hover:bg-gray-200
                  `}
          >
            {c.name}
          </Link>
        );
      })}
    </>
  );
}

