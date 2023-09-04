import { create } from "zustand";

const useAccount = create((set) => ({
  name: "",
  setName: () => set((state) => ({ name: state.name })),
}));

export default useAccount;
