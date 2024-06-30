import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBLog: builder.query({
      query: () => ({
        url: `/blog`,
        method: "GET",
      }),
    //   providesTags: ["Sells", "Bikes"],
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Sells", "Bikes"],
    }),
  }),
});

export const { useGetAllBLogQuery, useAddBlogMutation } = blogApi;
