// src/services/friendApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendApi = createApi({
  reducerPath: 'friendApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  tagTypes: ['Friend'],
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => '/friends',
      providesTags: ['Friend'],
    }),
    getFriendById: builder.query({
      query: (id) => `/friends/${id}`,
      providesTags: ['Friend'],
    }),
    addFriend: builder.mutation({
      query: (friend) => ({
        url: '/friends',
        method: 'POST',
        body: friend,
      }),
      invalidatesTags: ['Friend'],
    }),
    updateFriend: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/friends/${id}`,
        method: 'PUT',
        body: updates,
      }),
      invalidatesTags: ['Friend'],
    }),
    deleteFriend: builder.mutation({
      query: (id) => ({
        url: `/friends/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Friend'],
    }),
  }),
});

export const {
  useGetFriendsQuery,
  useGetFriendByIdQuery,
  useAddFriendMutation,
  useUpdateFriendMutation,
  useDeleteFriendMutation,
} = friendApi;