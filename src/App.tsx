import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import MobileMenu from './components/Menu/MobileMenu';
import { Outlet } from '@tanstack/react-router';
import Main from './components/Main/Main';

export type MenuProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <MobileMenu isOpen={isOpen} setOpen={setOpen} />
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default App
