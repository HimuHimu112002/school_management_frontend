import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AdminSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  endpoints: (builder) => ({
    getAdmindata: builder.query({
      query: () => "/get-admin",
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/save-admin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetAdmindataQuery, useCreateAdminMutation } = AdminSlice;
