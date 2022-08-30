import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
  'X-BingApis-SDK': process.env.REACT_APP_BINGNEWS_RAPIDAPI_SDK,
  'X-RapidAPI-Key': process.env.REACT_APP_BINGNEWS_RAPIDAPI_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_BINGNEWS_RAPIDAPI_HOST,
};

const baseUrl = process.env.REACT_APP_BINGNEWS_RAPIDAPI_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
