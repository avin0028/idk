import { apiSlice } from "./apiSlice"

export const wishlistSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    additem: builder.mutation({
      query: (data) => ({
        url: "/wishlist/additem",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    uploadimage: builder.mutation({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
})
export const { useAdditemMutation, useUploadimageMutation } = wishlistSlice
