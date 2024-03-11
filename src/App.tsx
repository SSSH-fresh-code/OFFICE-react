import { useState } from 'react';
import './index.css'
import Main from './pages/Main/Main';
import LoginWrapper from './pages/Login/LoginWrapper';
import useStore from './data/store/auth.store';
import usePopSotre from './data/store/popup.store';
import { Pop } from './Pop';

export type MenuProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { accessToken } = useStore();
  const { isPop } = usePopSotre();

  return (
    <div className="relative z-0 top-0 left-0">

      {
        isPop && <Pop />
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

