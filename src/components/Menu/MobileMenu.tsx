import { useEffect, useState } from "react"
import { MenuProps } from "../../App"
import { AnimatePresence, motion } from "framer-motion"
import MenuStyle from "./Menu.module.css";
import { Link, useRouterState } from "@tanstack/react-router";
import { menus } from "../../const/menu.const";
import BasicSVG from "../../assets/basic.svg?react";

function MobileMenu({ isOpen, setOpen }: MenuProps) {
  const [currentPath, setCurrentPath] = useState(useRouterState().location.pathname);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isOpen])

  return (<>
    {isOpen && (<>
      <div
        className={MenuStyle["m-menu-wrapper"]}
        onClick={() => setOpen(false)}
      />
    </>)}
    <AnimatePresence>
      {isOpen && (<>
        <motion.div
          exit={{ x: -520 }}
          transition={{ duration: 0.5 }}
          className={MenuStyle["m-menu"]}
        >
          <ul className={MenuStyle["m-menu-ul"]}>
            {
              menus.map(m =>
                <li className={MenuStyle["m-menu-li"]} aria-current={currentPath.toLowerCase() === m.link.toLowerCase()}>
                  <Link
                    to={m.link}
                    onClick={() => {
                      setOpen(false);
                      setCurrentPath(m.link);
                    }}
                    className={MenuStyle["m-menu-link"]}
                  >
                    {
                      m.icon
                        ? <m.icon
                          className={MenuStyle["m-menu-svg"]}
                          width="30px"
                          height="30px"
                        />
                        : <BasicSVG className={MenuStyle["m-menu-svg"]} />
                    }
                    <div className={MenuStyle["m-menu-name"]}>{m.name}</div>
                  </Link>
                </li>
              )
            }
          </ul>
        </motion.div>
      </>)}
    </AnimatePresence>
  </>)
}

export default MobileMenu;