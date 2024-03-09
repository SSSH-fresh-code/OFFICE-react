import { useState } from 'react';
import './index.css'
import Main from './pages/Main/Main';

export type MenuProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return <Main isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />;
}

export default App
