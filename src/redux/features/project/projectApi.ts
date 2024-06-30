import { apiSlice } from "../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: `/project`,
        method: "GET",
      }),
    //   providesTags: ["Sells", "Bikes"],
    }),
    addProject: builder.mutation({
      query: (data) => ({
        url: "/project",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Sells", "Bikes"],
    }),
  }),
});

export const { useGetAllProjectsQuery, useAddProjectMutation } = projectApi;
