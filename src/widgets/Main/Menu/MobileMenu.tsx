import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Menu from "./Menu";
interface MobileMenuProps {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isMenuOpen])

  return (
    <>
      {
        isMenuOpen
        && (
          <div
            className="block lg:hidden transition-all top-0 left-0 w-screen h-full z-30 bg-white opacity-50 absolute"
            onClick={() => setIsMenuOpen(false)}
          />
        )
      }
      <AnimatePresence>
        {
          isMenuOpen
          && (<motion.div
            exit={{ x: -520 }}
            transition={{ duration: 0.5 }}
            className="block lg:hidden menu fixed z-30 bg-gray-100 w-60 top-0 left-0 h-full"
          >
            <Menu />
          </motion.div>)
        }
      </AnimatePresence>
    </>
  )
}