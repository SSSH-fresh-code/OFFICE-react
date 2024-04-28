import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/auth.store";
import useMenusStore from "../store/menu.store";
export default function useGetMenusByAuthsMutation() {
  const { accessToken } = useAuthStore();
  const { setMenus } = useMenusStore();

  const mutation = useMutation({
    mutationFn: async () => {
      const authorization = `Bearer ${accessToken}`;

      return fetch(`${import.meta.env.VITE_API_URL}/menus/auths`, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      }).then(async (res) => {
        const json = await res.json();

        if (res.ok) return json;

        throw json;
      });
    },
    onSuccess(data) {
      setMenus(data);
    },
    onError() {},
  });

  return mutation;
}
