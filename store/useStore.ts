import { create } from "zustand";

type Message = {
  role: "user" | "ai";
  content: string;
};

type Store = {
  messages: Message[];
  loading: boolean;

  addMessage: (msg: Message) => void;
  updateLastMessage: (content: string) => void;
  setLoading: (val: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  messages: [],
  loading: false,

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg]
    })),

  updateLastMessage: (content) =>
    set((state) => {
      const msgs = [...state.messages];
      if (msgs.length > 0) {
        msgs[msgs.length - 1].content = content;
      }
      return { messages: msgs };
    }),

  setLoading: (val) => set({ loading: val })
}));
