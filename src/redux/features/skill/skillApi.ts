import { apiSlice } from "../api/apiSlice";

export const skillApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkills: builder.query({
      query: () => ({
        url: `/skill`,
        method: "GET",
      }),
    //   providesTags: ["Sells", "Bikes"],
    }),
    addSkill: builder.mutation({
      query: (data) => ({
        url: "/skill",
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Sells", "Bikes"],
    }),
  }),
});

export const { useGetAllSkillsQuery, useAddSkillMutation } = skillApi;
