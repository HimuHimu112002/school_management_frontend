import { configureStore } from "@reduxjs/toolkit";
import { SuperAdminapiSlice } from "../features/api/SuperAdminapiSlice";

export const store = configureStore({
  reducer: {
    [SuperAdminapiSlice.reducerPath]: SuperAdminapiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SuperAdminapiSlice.middleware),
},
// use multiple reducer
{
  reducer: {
    [SuperAdminapiSlice.reducerPath]: SuperAdminapiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SuperAdminapiSlice.middleware),
});
