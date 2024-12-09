import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SuperAdminapiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  endpoints: (builder) => ({
    //get and update super admin with rtk start
    getSuperAdmin: builder.query({
      query: () => "/get-super-admin",
    }),
    updateSuperAdmin: builder.mutation({
      query: ({ data, token }) => ({
        url: "/update-super-admin",
        method: "POST",
        body: data,
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    // done get and update super admin with rtk end

    //login and forgot with rtk start
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
    // done login and forgot with rtk end

    //admin section with rtk start
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/save-admin",
        method: "POST",
        body: data,
      }),
    }),
    getAdminPersonalInfo: builder.query({
      query: (token) => ({
        url: `/getAdmin`,
        method: "GET",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    getAdminlInfoWithParams: builder.query({
      query: (id) => ({
        url: `/getSingleAdmin`,
        method: "GET",
        headers: {
          id: `${id}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    getAdminProfileAccessSuperAdmin: builder.query({
      query: (id) => ({
        url: `/admin-profile/${id}`,
        method: "GET",
      }),
    }),
    updateAdmin: builder.mutation({
      query: ({ data, id }) => ({
        url: "/update-admin",
        method: "POST",
        body: data,
        headers: {
          user_id: `${id}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    getAllAdminWithPagination: builder.query({
      query: ({ currentPage, perPage }) => ({
        url: `/get-admin/${currentPage}/${perPage}`,
        method: "GET",
      }),
    }),
    // done admin section with rtk end

    // teacher section with rtk start
    createTeacher: builder.mutation({
      query: (data) => ({
        url: "/save-teachers",
        method: "POST",
        body: data,
      }),
    }),
    // done teacher section with rtk end
  }),
});
export const {
  useGetSuperAdminQuery,
  useGetAllAdminWithPaginationQuery,
  useGetAdminProfileAccessSuperAdminQuery,
  useGetAdminlInfoWithParamsQuery,
  useGetAdminPersonalInfoQuery,
  useForgotPasswordMutation,
  useLoginMutation,
  useUpdateAdminMutation,
  useUpdateSuperAdminMutation,
  useCreateAdminMutation,
  useCreateTeacherMutation,
} = SuperAdminapiSlice;
