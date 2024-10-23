import { create } from "zustand";

type Type = {
  balance: number;
  increment: () => void;
  decrement: () => void;
};
const useBankingATM = create<Type>((set) => ({
  balance: 100,
  increment: () => set((state) => ({ balance: state.balance + 20 })),
  decrement: () => set((state) => ({ balance: state.balance - 20 })),
}));

export default useBankingATM;
