import { Link } from "@tanstack/react-router";
import { Menu } from "../../../shared/constant/menu.const";

interface MenuLinkProps {
  menu: Menu;
}

export default function MenuLink({ menu }: MenuLinkProps) {
  const { link, name } = menu;
  return (
    <Link
      to={link}
      className="
        flex items-center gap-3 
        rounded-lg bg-gray-100 
        px-3 py-2 text-gray-900  
        transition-all hover:text-gray-900 hover:bg-gray-200
        "
    >
      <menu.icon />
      {name}
    </Link>
  );
}