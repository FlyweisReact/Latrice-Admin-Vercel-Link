// src/services/reviewsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  tagTypes: ['Review'],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => '/reviews',
      providesTags: ['Review'],
    }),
    getReviewById: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ['Review'],
    }),
    addReview: builder.mutation({
      query: (review) => ({
        url: '/reviews',
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ['Review'],
    }),
    updateReview: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/reviews/${id}`,
        method: 'PUT',
        body: updates,
      }),
      invalidatesTags: ['Review'],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewByIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;