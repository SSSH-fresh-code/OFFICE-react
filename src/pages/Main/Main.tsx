import { Outlet } from "@tanstack/react-router";
import MenuIcon from "../../shared/icons/menu.icon";
import Menu from "../../widgets/Main/Menu/Menu";
import UserProfileBtn from "../../widgets/Main/Menu/UserPofileBtn";
import MobileMenu from "../../widgets/Main/Menu/MobileMenu";

interface MainProps {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Main({ isMenuOpen, setIsMenuOpen }: MainProps) {

  return (
    <>
      <div className="grid min-h-screen w-full items-start gap-0 text-sm lg:grid-cols-[280px_1fr] absolute z-10 top-0 left-0">
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu />
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100 px-6 sticky top-0 left-0 lg:relative z-20">
            <a className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
              <MenuIcon />
              <span className="sr-only">Home</span>
            </a>
            <div className="w-full flex-1" />
            <UserProfileBtn />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <Outlet />
          </main>
        </div>
      </div >
    </>
  )
}