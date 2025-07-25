import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./features/ThemeSlice";
import UserSlice from "./features/UserSlice";
import BookingSlice from "./features/BookingSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    user : UserSlice,
    booking : BookingSlice
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
