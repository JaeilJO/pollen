import { create } from "zustand";

export const useForm = create((set) => ({
  info: {
    full_name: "",
    email: "",
    message: "",
  },
  setInfo: (x, y) =>
    set((state) => ({
      info: { ...state.info, [x]: y },
    })),
}));
