import usePopSotre from "../store/pop.store";
import api from "./api";

export default function useApi(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  body?: BodyInit,
  actionInError: () => void = (() => { })
) {
  const { pop } = usePopSotre();

  const header = { "content-type": "application/json" };
  const apiSend = () => (
    api(path, method, header, body)
      .then(async (res) => {
        if (res.ok) return await res.json();

        throw await res.json();
      })
      .catch(error => {
        const message = typeof error.message === "object" ? error.message[0] : error.message;
        pop(message, "error", actionInError);

        throw error;
      })
  )

  return apiSend;
}