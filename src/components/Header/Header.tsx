import { MenuProps } from '../../App';
import MobileHeader from './MobileHeader';

function Header({ isOpen, setOpen }: MenuProps) {
  return (
    <>
      <MobileHeader isOpen={isOpen} setOpen={setOpen} />
    </>
  );
}

export default Header;