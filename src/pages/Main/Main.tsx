import { Outlet } from "@tanstack/react-router";
import Menu from "../../widgets/Main/Menu/Menu";
import MobileMenu from "../../widgets/Main/Menu/MobileMenu";
import { PageInfo } from "./PageInfo";
import { MainHeader } from "./MainHeader";
import { useEffect } from "react";
import useGetMenusByAuthsMutation from "../../data/Menus/menus.auths.get";
import useMenusStore from "../../data/store/menu.store";

interface MainProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Main({ isMenuOpen, setIsMenuOpen }: MainProps) {
  const { menus } = useMenusStore();

  const getMenu = useGetMenusByAuthsMutation();

  useEffect(() => {
    if (menus.length < 1) getMenu.mutate();
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-screen items-start gap-0 text-sm lg:grid-cols-[280px_1fr] absolute z-10 top-0 left-0">
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="hidden w-96 lg:block lg:h-screen">
          <Menu />
        </div>
        <div className="flex flex-col w-full">
          <MainHeader setIsMenuOpen={setIsMenuOpen} />
          <PageInfo />
          <main className="flex flex-1 flex-col gap-2 px-4 py-0 md:gap-2 md:px-6">
            <Outlet />
          </main>
          <div id="footer" className="p-5" />
        </div>
      </div>
    </>
  );
}
