import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Cat } from "@/entities/cat/model/types";

export const catsApi = createApi({
  reducerPath: 'catsApi',

  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.thecatapi.com/v1',
    prepareHeaders: (headers) => {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      if (apiKey) {
        headers.set('x-api-key', apiKey);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getCats: builder.query<Cat[], number>({
      query: (page = 0) => ({
        url: `/images/search`,
        params: {
          limit: 20,
          page,
          order: 'DESC',
        },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,

      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },

    }),
  }), 


});

export const { useGetCatsQuery } = catsApi;