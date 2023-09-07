import { create } from "zustand";

const useConversation = create((set) => ({
  modal: false,
  loader: false,
  conversation: "",
  messages: [],
  toggleModal: (value) => set(() => ({ modal: value })),
  toggleLoader: (value) => set(() => ({ loader: value })),
  setConversation: (value) => set(() => ({ conversation: value })),
  setMessages: (value) =>
    set((state) => ({ messages: [...state.messages, ...[value]] })),
}));

export default useConversation;
