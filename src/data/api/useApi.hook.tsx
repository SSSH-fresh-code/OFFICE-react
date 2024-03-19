import { redirect } from "@tanstack/react-router";
import pageStore from "../store/auth.store"
import usePopSotre from "../store/pop.store";
import api from "./api";

export default function useApi(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  body?: BodyInit,
  isPublic: boolean = false,
  actionInError: () => void = (() => { })
) {
  const { accessToken, logout } = pageStore();
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
      authorization: `${accessToken ? "Bearer " + accessToken : ""}`
      , "content-type": "application/json"
    }, body)
      .then(async (res) => {
        if (res.ok) return await res.json();

        throw await res.json();
      })
      .catch(error => {
        const message = typeof error.message === "object" ? error.message[0] : error.message;
        console.log(message);
        console.log(typeof message);
        console.log(error)


        pop(message, "error", actionInError);

        throw error;
      })
  )

  return apiSend;
}