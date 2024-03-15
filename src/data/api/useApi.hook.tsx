import { redirect } from "@tanstack/react-router";
import useStore from "../store/auth.store"
import usePopSotre from "../store/pop.store";
import api from "./api";

export default function useApi(path: string, method: "GET" | "POST" | "PATCH" | "DELETE", isPublic: boolean = false) {
  const { accessToken, logout } = useStore();
  const { pop } = usePopSotre();

  if (!isPublic && !accessToken) {
    // if(refreshToken) {
    // TODO: refresh 토큰으로 auth 가져오기 
    // } else {}
    logout();
    redirect({ to: "/" });
  }

  const apiSend = () => (
    api(path, method, {
      authorization: `Bearer ${accessToken}`
    })
      .then(async (res) => {
        if (res.ok) return await res.json();

        throw await res.json();
      })
      .catch(error => {
        pop(error.message, "error")
      })
  )

  return apiSend;
}