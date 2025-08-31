// src/services/familyApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const familyApi = createApi({
  reducerPath: 'familyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  tagTypes: ['Family'],
  endpoints: (builder) => ({
    getFamilies: builder.query({
      query: () => '/families',
      providesTags: ['Family'],
    }),
    getFamilyById: builder.query({
      query: (id) => `/families/${id}`,
      providesTags: ['Family'],
    }),
    addFamily: builder.mutation({
      query: (family) => ({
        url: '/families',
        method: 'POST',
        body: family,
      }),
      invalidatesTags: ['Family'],
    }),
    updateFamily: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/families/${id}`,
        method: 'PUT',
        body: updates,
      }),
      invalidatesTags: ['Family'],
    }),
    deleteFamily: builder.mutation({
      query: (id) => ({
        url: `/families/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Family'],
    }),
  }),
});

export const {
  useGetFamiliesQuery,
  useGetFamilyByIdQuery,
  useAddFamilyMutation,
  useUpdateFamilyMutation,
  useDeleteFamilyMutation,
} = familyApi;