import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SuperAdminapiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1' }),
  endpoints: (builder) => ({
    getSuperAdmin: builder.query({
      query: () => '/get-super-admin',
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: '/items',
        method: 'POST',
        body: newItem,
      }),
    }),
  }),
});
export const { useGetSuperAdminQuery, useCreateItemMutation } = SuperAdminapiSlice;