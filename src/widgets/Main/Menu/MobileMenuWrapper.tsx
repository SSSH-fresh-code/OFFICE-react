
interface MobileMenuProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileMenuWrapper({ setIsMenuOpen }: MobileMenuProps) {
  return (
    <div
      className="transition-all top-0 left-0 w-screen h-screen z-20 bg-white opacity-50 absolute"
      onClick={() => setIsMenuOpen(false)}
    />
  )
}