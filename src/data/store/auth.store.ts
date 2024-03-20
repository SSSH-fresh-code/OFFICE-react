import { TUsers } from "types-sssh";
import { StoreApi, create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface AuthState {
  refreshToken: string,
  user?: Omit<TUsers, "userPw">,
  setUser: (user: Omit<TUsers, "userPw">) => void,
  setRefreshToken: (r: string) => void,
  logout: () => void
}

const authStore: (s: StoreApi<AuthState>['setState']) => AuthState = (set) => ({
  refreshToken: "",
  setUser: (user) => set((s) => ({ ...s, user: user })),
  setRefreshToken: (r: string) => set((s) => ({ ...s, refreshToken: r })),
  logout: () => {
    set((s) => ({ ...s, refreshToken: "" }))
    location.href = "/";
    location.reload();
  }
});

const useAuthStore = create<AuthState>(
  persist(
    devtools(authStore), { name: "authStore" }
  )
);
export default useAuthStore;