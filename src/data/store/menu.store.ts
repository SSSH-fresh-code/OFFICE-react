import { TMenu } from "@sssh-fresh-code/types-sssh";
import { StateCreator, StoreApi, create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface MenuState {
  menus: TMenu[];
  setMenus: (menus: TMenu[]) => void;
}

const menuStore: (s: StoreApi<MenuState>["setState"]) => MenuState = (set) => ({
  menus: [],
  setMenus: (menus) => set((s) => ({ ...s, menus: menus })),
});

const useMenusStore = create<MenuState>(
  persist(devtools(menuStore), {
    name: "menusStore",
    partialize: (state) => ({ menus: state.menus }),
  }) as StateCreator<MenuState, [], []>,
);
export default useMenusStore;
