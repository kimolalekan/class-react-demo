import { create } from "zustand";

const useCount = create((set) => ({
  count: 30,
  fruit: "Fruit",
  setFruit: (value) => set(() => ({ fruit: value })),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCount;
