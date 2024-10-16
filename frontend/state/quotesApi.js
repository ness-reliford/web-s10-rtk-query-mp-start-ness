// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({

    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:9009/api"}),
    tagTypes: ['quotes'],
    endpoints: builder => ({
        getQuotes: builder.query({
            query: () => 'quotes',
            providesTags: ['quotes'],
        }),
        createQuote: builder.mutation({
            query: quote => ({
                url: 'quotes',
                method: 'POST',
                body: quote
            }),
            invalidatesTags: ['quotes']
        }),
        toggleFake: builder.mutation({
            query: ({id, quote}) => ({
                url: `quotes/${id}`,
                method: 'PUT',
                body: quote
            }),
            invalidatesTags: ['quotes']
        }),
        deleteQuote: builder.mutation({
            query: id => ({
                url: `quotes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['quotes']
        })
    })


})

export const {
    useGetQuotesQuery,
    useToggleFakeMutation, 
    useCreateQuoteMutation, 
    useDeleteQuoteMutation,
} = quotesApi