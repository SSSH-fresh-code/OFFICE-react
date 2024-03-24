import { useEffect, useState } from 'react';
import './index.css'
import Main from './pages/Main/Main';
import LoginWrapper from './pages/Login/LoginWrapper';
import usePopSotre from './data/store/pop.store';
import { Pop } from './Pop';
import { AnimatePresence } from 'framer-motion';
import useAuthStore from './data/store/auth.store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type MenuProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { refreshToken } = useAuthStore();
  const { isPop } = usePopSotre();

  const queryClient = new QueryClient({});

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
    <QueryClientProvider client={queryClient}>
      <div className="relative z-0 top-0 left-0 w-screen">

        {
          isPop && <AnimatePresence><Pop /></AnimatePresence>
        }

        {
          refreshToken
            ? <Main isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            : <LoginWrapper />
        }
      </div>
    </QueryClientProvider>
  )

}

export default App;

