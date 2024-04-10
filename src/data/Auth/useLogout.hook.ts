import api from "../api/api";
import useAuthStore from "../store/auth.store";
import usePopSotre from "../store/pop.store";
import { useNavigate } from "@tanstack/react-router";

export default function useLogout() {
  const { pop } = usePopSotre();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const logoutEvent = () => {
    pop(
      "로그아웃 하시겠습니까?",
      "info",
      async () => {
        await api("/users/logout", "GET", {}, undefined, true);
        await navigate({ to: "/" });
        await logout();
      },
      true
    )
  }

  return logoutEvent;
}