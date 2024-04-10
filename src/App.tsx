import './index.css'
import { Pop } from './Pop';
import Main from './pages/Main/Main';
import { useEffect, useState } from 'react';
import usePopSotre from './data/store/pop.store';
import { AnimatePresence } from 'framer-motion';
import useAuthStore from './data/store/auth.store';
import { Loading } from './shared/component/Loading';
import LoginWrapper from './pages/Login/LoginWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import api from './data/api/api';

export type MenuProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { refreshToken, setToken } = useAuthStore();
  const { isPop, isLoading } = usePopSotre();

  const queryClient = new QueryClient({});

  useEffect(() => {
    if (!refreshToken) {
      api("/users/refresh", "POST", { "content-type": "appliation/json" }, undefined, true)
        .then(res => {
          if (res.ok) {
            res.json().then(({ accessToken, refreshToken }) => {
              setToken(accessToken, refreshToken);
            })
          }
        })
    }
  }, [refreshToken, setToken])

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
          isLoading && (
            <div
              className={`absolute top-0 left-0 z-50 bg-white opacity-70 w-screen h-screen flex justify-center items-center overflow-hidden touch-none`}
            >
              <Loading />
            </div>
          )
        }

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

