import { useRef, useState } from "react";
import XIcon from "../../shared/icons/x.icon";
import { motion } from "framer-motion";
import { Input } from "../../shared/component/Form/Input";
import usePostRegisterMutation from "../../data/Auths/register.post";
import usePopSotre from "../../data/store/pop.store";

interface RegisterProps {
  setScreen: React.Dispatch<React.SetStateAction<"Login" | "Register">>
}

export default function Register({ setScreen }: RegisterProps) {
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");
  const [userPwRe, setUserPwRe] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const userIdRef = useRef<HTMLInputElement>(null);
  const userPwRef = useRef<HTMLInputElement>(null);
  const userPwReRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);

  const { pop } = usePopSotre();

  const registerMutation = usePostRegisterMutation(userId, userPw, userName, setScreen);
  const refCheckAfterFocus = (r: React.RefObject<HTMLInputElement>) => { if (r.current) r.current.focus() }

  const registerEvent: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let msg = "";
    let ref: React.RefObject<HTMLInputElement>;

    if (!userId) {
      msg = "아이디를 입력해주세요.";
      ref = userIdRef;
    } else if (!userPw) {
      msg = "비밀번호를 입력해주세요.";
      ref = userPwRef;
    } else if (!userPwRe) {
      msg = "비밀번호 확인을 입력해주세요.";
      ref = userPwReRef;
    } else if (userPw !== userPwRe) {
      msg = "비밀번호와 확인 값이 일치하지 않습니다.";
      ref = userPwRef;
    } else if (!userName) {
      msg = "이름을 입력해주세요.";
      ref = userNameRef;
    }

    if (msg) pop(msg, "error", () => refCheckAfterFocus(ref));
    else registerMutation.mutate();
  }


  return (
    <motion.div
      key="register"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-rows-12 min-h-screen p-6 "
    >
      <div className="row-span-1 ml-auto">
        <span className="cursor-pointer" onClick={() => setScreen("Login")}>
          <XIcon w={"35px"} h={"35px"} />
        </span>
      </div>
      <div className="row-span-10 flex flex-col justify-center mx-auto w-full max-w-sm space-y-6 h-full">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">회원가입</h1>
          <p className="text-gray-500 dark:text-gray-400">회원가입을 위한 정보를 입력해주세요.</p>
        </div>
        <form onSubmit={registerEvent} className="grid grid-cols-6 gap-5" >
          <Input option={{ ref: userIdRef, max: 20, min: 4, required: true }} id={"userId"} title={"아이디"} setter={setUserId} />
          <Input option={{ ref: userPwRef, max: 20, min: 8, required: true }} type="password" id={"pw"} title={"비밀번호"} setter={setUserPw} />
          <Input option={{ ref: userPwReRef, max: 20, min: 8, required: true }} type="password" id={"pwRe"} title={"비밀번호 확인"} setter={setUserPwRe} />
          <Input option={{ ref: userNameRef, max: 10, min: 2, required: true }} id={"userName"} title={"이름"} setter={setUserName} />
          <button
            type="submit"
            className="col-span-6 mt-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-black text-white"
          >
            가입
          </button>
        </form>
        <div className="space-y-2 text-center text-sm">
          <p>
            회원가입 후 승인이 있어야 로그인이 가능합니다.
          </p>
        </div>
      </div>
    </motion.div >
  )
}



