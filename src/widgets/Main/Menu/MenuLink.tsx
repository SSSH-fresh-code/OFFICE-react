import { Link } from "@tanstack/react-router";
import { Menu } from "../../../shared/constant/menu.const";

interface MenuLinkProps {
  menu: Menu;
}

export default function MenuLink({ menu }: MenuLinkProps) {
  if (menu.children) {
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
          {menu.icon}
          {menu.name}
        </div>
        {
          menu.children.map(
            (c, idx) => {
              return (
                <Link
                  key={`${menu.name}-${idx}`}
                  to={c.link}
                  className={`
                    ${menu.children!.length === idx + 1 ? "rounded-br-lg rounded-bl-lg" : ""} 
                    flex items-center gap-3 text-[12px] bg-gray-100 
                    pl-11 py-2 text-gray-900
                    transition-all hover:text-gray-900 hover:bg-gray-200
                  `}
                >
                  {c.name}
                </Link>
              )
            }
          )
        }
      </>
    )
  } else {
    return <SingleLink menu={menu} />
  }
}

function SingleLink({ menu }: MenuLinkProps) {
  const { name, link, icon } = menu;
  return (
    <Link
      to={link}
      className="
        flex items-center gap-3 mt-1
        rounded-lg bg-gray-200 
        px-3 py-2 text-gray-900  
        transition-all hover:text-gray-900 hover:bg-gray-300
        "
    >
      {icon}
      {name}
    </Link>
  )
}

// {
//   menu.children.map(
//     (c) => {
//       return (
//         <div
//           className="
//             flex items-center gap-3
//             rounded-lg bg-gray-100
//             px-3 py-2 text-gray-900
//             transition-all hover:text-gray-900 hover:bg-gray-200
//           "
//         >
//           {menu.name}
//         </div>
//     }
//   )
// }