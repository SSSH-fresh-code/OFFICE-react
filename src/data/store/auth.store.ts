import { TUsers } from "types-sssh";
import { create, useStore } from "zustand";

export interface AuthState {
  accessToken: string,
  refreshToken: string,
  user?: Omit<TUsers, "userPw">,
  setUser: (user: Omit<TUsers, "userPw">) => void,
  logout: () => void
}

const authStore = create<AuthState>()((set) => ({
  accessToken: "",
  refreshToken: "",
  setUser: (user) => set((s) => ({ ...s, user: user })),
  logout: () => set((s) => ({ ...s, accessToken: "", refreshToken: "" }))
}));

function useAuthStore(selector?: (state: AuthState) => T) {
  return useStore(authStore, selector!);
}

export default useAuthStore;