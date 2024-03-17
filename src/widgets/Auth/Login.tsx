import { useState } from "react";
import IdInput from "./IdInput";
import { PwInput } from "./PwInput";
import usePostLoginMutation from "../../data/Auth/login.post";

export default function Login() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const loginMutation = usePostLoginMutation(id, pw);
  const loginEvent = () => {
    loginMutation.mutate();
  }


  return (
    <div className="flex items-center min-h-screen p-6 ">
      <div className="mx-auto w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-gray-500 dark:text-gray-400">로그인을 위해 계정정보를 입력해주세요!</p>
        </div>
        <div className="space-y-4" >
          <IdInput id={id} setId={setId} loginEvent={loginEvent} />
          <PwInput pw={pw} setPw={setPw} loginEvent={loginEvent} />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-white "
            type="submit"
            onClick={loginEvent}
          >
            로그인
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-black text-white"
          >
            회원가입
          </button>
        </div>
        <div className="space-y-2 text-center text-sm">
          <p>
            승인 받은 계정만 해당 페이지에 로그인 할 수 있습니다.
          </p>
        </div>
      </div>
    </div >
  )
}



