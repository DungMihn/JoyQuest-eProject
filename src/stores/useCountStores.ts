import { create } from "zustand";

type TuseCountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
}
const useCountStores = create<TuseCountStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

}));

export default useCountStores;