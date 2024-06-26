import { useMutation } from "@tanstack/react-query";
import { Buffer } from "buffer";
import usePopSotre from "../store/pop.store";
import useAuthStore from "../store/auth.store";
export default function usePostLoginMutation(id: string, pw: string) {
  const { pop } = usePopSotre();
  const { setToken } = useAuthStore();

  const mutation = useMutation({
    mutationFn: () => {
      if (!id) throw new Error("아이디를 입력해주세요.");
      else if (!pw) throw new Error("비밀번호를 입력해주세요.");

      const basic = Buffer.from(`${id}:${pw}`).toString('base64');
      const authorization = `Basic ${basic}`;

      return fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Authorization": authorization
        },
      })
        .then(async (res) => {
          const json = await res.json()

          if (res.ok) return json;

          throw json;
        })
    },
    onError(error) {
      pop(error.message, "error");
    },
    onSuccess({ accessToken, refreshToken }) {
      setToken(accessToken, refreshToken);
    },
  });

  return mutation;
}
