import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AdminSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1"}),
  //tagTypes: ['Admin'],
  endpoints: (builder) => ({
    // done create admin with rtk
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/save-admin",
        method: "POST",
        body: data,
      }),
      //invalidatesTags: [{ type: 'Admin' }] 
    }),
    // done update admin with rtk
    updateAdmin: builder.mutation({
      query: ({ data, id }) => ({
        url: "/update-admin",
        method: "POST",
        body: data,
        headers: {
          user_id: `${id}`,
        },
      }),
      //invalidatesTags: ["Admin"],
    }),
    // done get admin profile with rtk
    getSuperAdmin: builder.query({
      query: (token) => ({
        url: `/getAdmin`,
        method: "GET",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    getAdminProfile: builder.query({
      query: (id) => ({
        url: `/admin-profile/${id}`,
        method: "GET",
      }),
    })
    
    // done get admin with rtk
    // getSuperAdmin: builder.query({
    //   query: (id) => ({
    //     url: `/getSingleAdmin`,
    //     method: "GET",
    //     headers: {
    //       id: `${id}`,
    //       "Content-Type": "application/json",
    //     },
    //   }),
    // }),
  }),
});
export const {
  useGetSuperAdminQuery,
  useGetAdminDataQuery,
  useGetAdminProfileQuery,
  useCreateAdminMutation,
  useUpdateAdminMutation,
} = AdminSlice;
