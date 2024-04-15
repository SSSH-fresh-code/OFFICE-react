import { useState } from "react";
import Login from "../../widgets/Auths/Login";
import Register from "../../widgets/Auths/Register";
import { AnimatePresence } from "framer-motion";

export default function LoginWrapper() {
  const [screen, setScreen] = useState<"Login" | "Register">("Login");

  return (
    <div className="grid grid-cols-12 h-screen w-screen overflow-hidden">
      <div
        className="h-full col-span-8 hidden md:block  bg-cover bg-no-repeat bg-center bg-[url('/src/assets/loginBg.webp')]"
      />
      <div className="h-full col-span-12 md:col-span-4 bg-gray-50 md:bg-none">
        <AnimatePresence key="LoginWrapper">
          {screen === "Login" && (<Login setScreen={setScreen} />)}
          {screen === "Register" && <Register setScreen={setScreen} />}
        </AnimatePresence>
      </div>
    </div>
  )
}