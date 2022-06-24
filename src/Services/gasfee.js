import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const gasfeeApi = createApi({
    reducerPath:'gasfeeApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/'

    }),
    endpoints:(builder)=>({
        getAllGasFee:builder.query({
            query: ()=>({
                url:'posts',
                method:'GET'
            })
        })
    })
    
  })

  export const {useGetAllGasFee}=gasfeeApi