import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SuperAdminapiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1' }),
  endpoints: (builder) => ({
    getSuperAdmin: builder.query({
      query: () => '/get-super-admin',
    }),
    // updateAdmin: builder.query({
    //   query: (id) => `/users/${id}`,
    // }),
    // createItem: builder.mutation({
    //   query: (newItem) => ({
    //     url: '/items',
    //     method: 'POST',
    //     body: newItem,
    //   }),
    // }),
    // updateUserProfile: builder.mutation({
    //   query: ({ headers, reqBody }) => ({
    //     url: `/update-super-admin/${headers}`,
    //     method: 'POST',
    //     body: reqBody,
    //   }),
    // }),
  }),
});
export const { useGetSuperAdminQuery,useUpdateAdminQuery, useCreateItemMutation, useUpdateUserProfileMutation } = SuperAdminapiSlice;