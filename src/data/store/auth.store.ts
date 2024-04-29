import { TUsers } from "@sssh-fresh-code/types-sssh";
import { StateCreator, StoreApi, create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface AuthState {
  accessToken: string,
  refreshToken: string,
  user?: Omit<TUsers, "userPw">,
  setUser: (user: Omit<TUsers, "userPw">) => void,
  setToken: (a: string, r: string) => void,
  logout: () => void
}

const authStore: (s: StoreApi<AuthState>['setState']) => AuthState = (set) => ({
  accessToken: "",
  refreshToken: "",
  setUser: (user) => set((s) => ({ ...s, user: user })),
  setToken: (a: string, r: string) => set((s) => ({ ...s, accessToken: a, refreshToken: r })),
  logout: () => {
    set((s) => ({ ...s, accessToken: "", refreshToken: "" }))
    localStorage.clear();
    location.href = "/";
    location.reload();
  }
});

const useAuthStore = create<AuthState>(
  persist(devtools(authStore), { name: "authsStore", partialize: (state) => ({ refreshToken: state.refreshToken }) }) as StateCreator<AuthState, [], []>
);
export default useAuthStore;