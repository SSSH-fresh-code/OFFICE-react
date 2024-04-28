import usePopSotre from "../store/pop.store";
import api from "./api";
import useAuthStore from "../store/auth.store";

export default function useApiRetry(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  body?: BodyInit,
  actionInError: () => void = () => {},
) {
  const { pop, setLoading } = usePopSotre();
  const { refreshToken, accessToken, setToken, logout } = useAuthStore();

  const header: HeadersInit = { "content-type": "application/json" };

  if (accessToken) header["authorization"] = `Bearer ${accessToken}`;
  if (path === "/menus/auths") {
    console.log(accessToken);
  }

  const apiSend = () => {
    setLoading(true);
    return api(path, method, header, body)
      .then(async (res) => {
        // 요청이 200,201 이라면 return
        if (res.ok) return await res.json();
        // 아니라면 catch
        throw await res.json();
      })
      .catch(async (error) => {
        // 401 인 경우 토큰에 문제가 있다고 판단
        if ([401].includes(error.statusCode)) {
          // re
          const refresh = await api("/users/refresh", "POST", {
            ...header,
            authorization: `Bearer ${refreshToken}`,
          });

          if (refresh.ok) {
            const { accessToken, refreshToken } = await refresh.json();

            setToken(accessToken, refreshToken);
            header["authorization"] = `Bearer ${accessToken}`;

            return await api(path, method, header, body);
          } else {
            logout();
          }
        } else {
          throw error;
        }
      })
      .then(async (res) => {
        if (res.json) {
          if (res.ok) return await res.json();
          throw await res.json();
        }
        return res;
      })
      .catch((error) => {
        const message =
          typeof error.message === "object" ? error.message[0] : error.message;
        pop(message, "error", actionInError);

        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return apiSend;
}

