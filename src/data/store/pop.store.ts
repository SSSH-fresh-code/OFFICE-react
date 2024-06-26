import { StoreApi, create } from "zustand";

export interface PopState {
  isPop: boolean;
  isLoading: boolean;
  type: "info" | "error";
  message: string;
  isConfirm: boolean;
  setLoading: (is: boolean) => void;
  onResolved: () => void;
  onRejected?: () => void;
  pop: (message: string, type?: "info" | "error", onResolved?: () => void, isConfirm?: boolean, onRejected?: () => void) => void;
  disappear: () => void;
}

const popStore: (s: StoreApi<PopState>['setState']) => PopState = (set) => ({
  isPop: false,
  type: "info",
  message: "",
  isConfirm: false,
  isLoading: false,
  setLoading: (is: boolean) => { set({ isLoading: is }) },
  onResolved: () => { set({ isPop: false }) },
  onRejected: () => { set({ isPop: false }) },
  pop: (
    message: string
    , type: "info" | "error" = "info"
    , onResolved: () => void = () => { set({ isPop: false }) }
    , isConfirm: boolean = false
    , onRejected: () => void = () => { set({ isPop: false }) }
  ) => {
    set({
      isPop: true,
      message,
      onResolved,
      type,
      isConfirm,
      onRejected
    })
  }
  , disappear: () => set({ isPop: false })
});

const usePopSotre = create<PopState>(popStore);

export default usePopSotre;