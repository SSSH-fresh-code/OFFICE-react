import React from "react";
import useStore from "../store/auth.store"
import usePopSotre from "../store/pop.store";

export default function useApi(path: string, method: "GET" | "POST" | "PATCH" | "DELETE", isLogin: boolean = false) {
  const { accessToken, logout } = useStore();
  const { pop } = usePopSotre();

  if (!isLogin && !accessToken) {
    // if(refreshToken) {
    // TODO: refresh 토큰으로 auth 가져오기 
    // } else {}
    logout()
  }

  const api = () => (
    fetch(`${import.meta.env.BASE_URL}${path}`, {
      method: method,
      headers: {
        authrization: `Bearer ${accessToken}`
      }
    })
      .then(async (res) => {
        if (res.ok) return await res.json();

        throw await res.json();
      })
      .catch(error => {
        pop(error.message, "error")
      })
  )

  return api;
}