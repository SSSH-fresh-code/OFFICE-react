import { useMutation } from "@tanstack/react-query";
import usePopSotre from "../store/pop.store";
import useApiRetry from "../api/useApiRetry.hook";

export default function usePostRegisterMutation(
  userId: string,
  userPw: string,
  userName: string,
  setScreen: React.Dispatch<React.SetStateAction<"Login" | "Register">>
) {
  const { pop } = usePopSotre();

  const mutation = useMutation({
    mutationFn: useApiRetry(`/users`, "POST", JSON.stringify({
      userId, userPw, userName
    })),
    onSuccess() {
      pop("회원가입이 요청되었습니다. 관리자의 승인을 기다려주세요.", "info", () => setScreen("Login"))
    },
  });

  return mutation;
}
