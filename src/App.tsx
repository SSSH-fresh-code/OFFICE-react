import { useEffect, useState } from 'react';
import './index.css'
import Main from './pages/Main/Main';
import LoginWrapper from './pages/Login/LoginWrapper';
import pageStore from './data/store/auth.store';
import usePopSotre from './data/store/pop.store';
import { Pop } from './Pop';
import { AnimatePresence } from 'framer-motion';
import { QueryClient } from '@tanstack/react-query';

export type MenuProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { accessToken } = pageStore();
  const { isPop } = usePopSotre();

  useEffect(() => {
    if (isPop) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isPop])

  return (
    <div className="relative z-0 top-0 left-0 w-screen">

      {
        isPop && <AnimatePresence><Pop /></AnimatePresence>
      }

      {
        accessToken
          ? <Main isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          : <LoginWrapper />
      }
    </div>
  )

}

export default App;

