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
  setSubmit: () =>
    set(async (state) => {
      console.log(state.info);
      return { info: { full_name: "", email: "", message: "" } };
    }),
}));
