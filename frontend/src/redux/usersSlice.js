import { apiSlice } from "./apiSlice"

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "users/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "users/logout",
        method: "POST",
      }),
    }),
    changepass: builder.mutation({
      query: (data) => ({
        url: "users/changepass",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useChangepassMutation,
} = usersSlice
