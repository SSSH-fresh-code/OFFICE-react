import { useEffect } from "react"
import { MenuProps } from "../../App"
import { AnimatePresence, motion } from "framer-motion"
import MenuStyle from "./Menu.module.css";
import { Link } from "@tanstack/react-router";

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
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>about</Link>
          </ul>
        </motion.div>
      </>)}
    </AnimatePresence>
  </>)
}

export default MobileMenu;