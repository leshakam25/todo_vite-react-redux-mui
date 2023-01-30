import { configureStore } from "@reduxjs/toolkit";
import cellSlice from "./cellSlice";

export default configureStore({
  reducer: {
    cell: cellSlice,
  },
});
