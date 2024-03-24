import { StateCreator, StoreApi, create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface PageStore {
  name: string,
  setName: (name: string) => void
}

const pageStore: (s: StoreApi<PageStore>['setState']) => PageStore = (set) => ({
  name: "home",
  setName: (name: string) => set(() => ({ name: name }))
});

const usePageStore = create<PageStore>(
  persist(
    devtools(pageStore), { name: "pageStore" }
  ) as StateCreator<PageStore, [], []>
);
export default usePageStore;