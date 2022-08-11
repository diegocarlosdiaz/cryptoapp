import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4fd1c0fe4dmsh9b2a01e0e4f3706p115453jsn316298535f90',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => (
            {
                getCryptos: builder.query({
                    query: (count) => createRequest(`/coins?limit=${count}`)   
                })
            }
        )
})

export const { useGetCryptosQuery} = cryptoApi;
