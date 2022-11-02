import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://min-api.cryptocompare.com",
  }),
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: () => `/data/price?fsym=BTC&tsyms=USD,JPY,EUR`,
    }),
    getTopTen: builder.query({
      query: () =>
        `/data/top/totalvolfull?limit=10&tsym=USD&apikey=cfb058ec88478dd30a031967a512f3e8df980fae05ed3b49078bfa5ef4482780`,
    }),
  }),
});

export const { useGetArtistsQuery, useGetTopTenQuery } = cryptoApi;

//https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/v1.1/artist.get?artist_mbid=65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab&apikey=e171cbc623b1d7bb07c6cbd474b18350
