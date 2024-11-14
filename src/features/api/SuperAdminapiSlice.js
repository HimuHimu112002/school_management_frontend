import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SuperAdminapiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  endpoints: (builder) => ({
    getSuperAdmin: builder.query({
      query: () => "/get-super-admin",
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/forgot",
        method: "POST",
        body: data,
      }),
    }),
    updateSuperAdmin: builder.mutation({
      query: ({data, token}) => ({
        url: "/update-super-admin",
        method: "POST",
        body: data,
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
export const {
  useGetSuperAdminQuery,
  useForgotPasswordMutation,
  useLoginMutation,
  useUpdateSuperAdminMutation,
} = SuperAdminapiSlice;
