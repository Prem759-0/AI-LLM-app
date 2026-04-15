import { create } from "zustand";

export const useStore = create((set) => ({
  messages: [],
  loading: false,

  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),

  updateLastMessage: (content) =>
    set((state) => {
      const msgs = [...state.messages];
      msgs[msgs.length - 1].content = content;
      return { messages: msgs };
    }),

  setLoading: (val) => set({ loading: val })
}));
