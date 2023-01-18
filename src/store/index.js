import { configureStore } from "@reduxjs/toolkit";
import cellSlice from "./cellSlice";
import styleReducer from "./styleSlice";

export default configureStore({
  reducer: {
    cell: cellSlice,
    style: styleReducer,
  },
});
