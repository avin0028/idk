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
    getitems: builder.query({
      query: ({ pageNumber, pageWidth }) => ({
        url: "/wishlist/getitems",
        params: { pageNumber, pageWidth },
      }),
      keepUnusedDataFor: 5,
    }),
    deleteitem: builder.mutation({
      query: (data) => ({
        url: "/wishlist/deleteitem",
        method: "DELETE",
        body: data,
      }),
    }),
    addsavings: builder.mutation({
      query: (data) => ({
        url: "/wishlist/addsavings",
        method: "PUT",
        body: data,
      }),
    }),
  }),
})
export const {
  useAdditemMutation,
  useUploadimageMutation,
  useGetitemsQuery,
  useDeleteitemMutation,
  useAddsavingsMutation,
} = wishlistSlice
