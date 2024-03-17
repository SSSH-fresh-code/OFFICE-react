import { useState } from "react";
import IdInput from "./IdInput";
import { PwInput } from "./PwInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Buffer } from "buffer";
import pageStore from "../../data/store/auth.store";
import usePopSotre from "../../data/store/pop.store";

export default function Login() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const { pop } = usePopSotre()
  const { setToken } = pageStore();

  const mutation = useMutation({
    mutationFn: () => {
      const basic = Buffer.from(`${id}:${pw}`).toString('base64');
      const authorization = `Basic ${basic}`;

      return fetch('http://localhost:3000/users/login', {
        method: "POST",
        headers: {
          "Authorization": authorization
        }
      })
        .then(async (res) => {
          const json = await res.json();

          if (res.ok) return json;

          throw json;
        })
    },
    onError(error) {
      pop(error.message, "error");
    },
    onSuccess(data) {
      if (
        Object.prototype.hasOwnProperty.call(data, "accessToken")
        && Object.prototype.hasOwnProperty.call(data, "refreshToken")
      ) {
        setToken(data.accessToken, data.refreshToken);
      } else {
        throw new Error("올바르지 않은 토큰 값 입니다.")
      }
    },
  });

  return (
    <div className="flex items-center min-h-screen p-6 ">
      <div className="mx-auto w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-gray-500 dark:text-gray-400">로그인을 위해 계정정보를 입력해주세요!</p>
        </div>
        <div className="space-y-4" >
          <IdInput id={id} setId={setId} />
          <PwInput pw={pw} setPw={setPw} />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-white "
            type="submit"
            onClick={() => mutation.mutate()}
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



