import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AdminSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAdmindata: builder.query({
      query: ({ currentPage, perPage }) =>
        `get-admin/${currentPage}/${perPage}`,
      transformResponse: (response) => ({
        admins: response.data[0].Rows,
        totalPages: response.totalPages,
        perPage: response.perPage,
      }),
    }),

    getSingleAdmin: builder.query({
      query: (id) => ({
        url: `/getSingleAdmin`,
        method: "GET",
        headers: {
          user_id: id,
        },
        transformResponse: (response) => response.data,
      }),
    }),

    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/save-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),

    updateAdmin: builder.mutation({
      query: ({ data, id }) => ({
        url: "/update-admin",
        method: "POST",
        body: data,
        headers: {
          user_id: `${id}`,
          //maxBodyLength: Infinity,
          //"Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      }),
      //invalidatesTags: ["Admin"],
    }),
  }),
});
export const {
  useGetAdmindataQuery,
  useGetSingleAdminQuery ,
  useCreateAdminMutation,
  useUpdateAdminMutation,

} = AdminSlice;
