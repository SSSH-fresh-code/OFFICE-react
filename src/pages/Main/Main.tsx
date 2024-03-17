import { Outlet } from "@tanstack/react-router";
import Menu from "../../widgets/Main/Menu/Menu";
import MobileMenu from "../../widgets/Main/Menu/MobileMenu";
import { PageInfo } from "./PageInfo";
import { MainHeader } from "./MainHeader";

interface MainProps {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Main({ isMenuOpen, setIsMenuOpen }: MainProps) {

  return (
    <>
      <div className="grid min-h-screen w-full items-start gap-0 text-sm lg:grid-cols-[280px_1fr] absolute z-10 top-0 left-0">
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="hidden lg:block h-full"><Menu /></div>
        <div className="flex flex-col">
          <MainHeader setIsMenuOpen={setIsMenuOpen} />
          <PageInfo />
          <main className="flex flex-1 flex-col gap-2 px-4 py-0 md:gap-2 md:px-6">
            <Outlet />
          </main>
        </div>
      </div >
    </>
  )
}
