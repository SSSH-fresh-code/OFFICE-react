import { Outlet, useMatches } from "@tanstack/react-router";
import MenuIcon from "../../shared/icons/menu.icon";
import Menu from "../../widgets/Main/Menu/Menu";
import UserProfileBtn from "../../widgets/Main/Menu/UserPofileBtn";
import MobileMenu from "../../widgets/Main/Menu/MobileMenu";

interface MainProps {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Main({ isMenuOpen, setIsMenuOpen }: MainProps) {
  const matches = useMatches();

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
          <div className="py-2  border-b border-gray-50 grid grid-cols-12">
            <div className="col-span-1 lg:col-span-2">
            </div>
            <div className="text-center col-span-10 lg:col-span-8">
              <h1 className="font-semibold text-lg md:text-2xl">
                {matches[matches.length - 1].context.pageName}
              </h1>
            </div>
            <div className="col-span-1 lg:col-span-2"></div>
          </div>
          <main className="flex flex-1 flex-col gap-2 px-4 py-0 md:gap-8 md:px-6">
            <Outlet />
          </main>
        </div>
      </div >
    </>
  )
}