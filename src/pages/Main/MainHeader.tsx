import MobileMenuIcon from "../../shared/icons/moblie-menu.icon";
import UserProfileBtn from "../../widgets/Main/Menu/UserPofileBtn";

interface MainHeaderProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export function MainHeader({ setIsMenuOpen }: MainHeaderProps) {
  return <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100 px-6 sticky top-0 left-0 lg:relative z-20">
    <a className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
      <MobileMenuIcon />
      <span className="sr-only">Home</span>
    </a>
    <div className="w-full flex-1" />
    <UserProfileBtn />
  </header>;
}
