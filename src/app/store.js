import { configureStore } from "@reduxjs/toolkit";
import { SuperAdminapiSlice } from "../features/api/SuperAdminapiSlice";
import { AdminSlice } from "../features/api/AdminSlice";
//import { userSlice } from "../TolkitUserInfoSlice/userSlice";

export const store = configureStore(
  // super admin reducer
  {
    reducer: {
      [SuperAdminapiSlice.reducerPath]: SuperAdminapiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(SuperAdminapiSlice.middleware),
  },

  // admin reducer
  {
    reducer: {
      [AdminSlice.reducerPath]: AdminSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(AdminSlice.middleware),
  },

  // {
  //   reducer: {
  //     userLoginInfo: userSlice,
  //   },
  // }
);
