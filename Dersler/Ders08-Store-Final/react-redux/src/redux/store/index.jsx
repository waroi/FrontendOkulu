import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
