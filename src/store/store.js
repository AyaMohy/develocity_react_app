import { configureStore } from '@reduxjs/toolkit'
import contractAddressSlice from './contractAddressSlice'
import SearchReducer from './../Pages/DataFetch/FetchSearchData'
export const store = configureStore({
    reducer: {
        contractAddress: contractAddressSlice,
        Search:SearchReducer
    },
})