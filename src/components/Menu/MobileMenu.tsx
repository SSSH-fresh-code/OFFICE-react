import { useEffect } from "react"
import { MenuProps } from "../../App"
import { AnimatePresence, motion } from "framer-motion"
import MenuStyle from "./Menu.module.css";
import { Link } from "@tanstack/react-router";
import { menus } from "../../const/menu.const";
import BasicSVG from "../../assets/basic.svg";

function MobileMenu({ isOpen, setOpen }: MenuProps) {

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
                <li className={MenuStyle["m-menu-li"]}>
                  <Link className={MenuStyle["m-menu-link"]} to={m.link}>
                    {m.icon ? <img src={m.icon} /> : <img src={BasicSVG} />}
                    <div>{m.name}</div>
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