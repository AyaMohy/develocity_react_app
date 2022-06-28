import { configureStore } from '@reduxjs/toolkit'
import contractAddressSlice from './contractAddressSlice'
import SearchReducer from './../Pages/DataFetch/FetchSearchData'
import GetBSCdataReducer from './../Services/FetchBSCData'
import GettokeninfodataReducer from './../Services/FetchTokenInfo'
import ScoreReducer from "../Pages/DataFetch/FetchTrustScoreData";
import DistReducer from "../Pages/DataFetch/FetchDistributionData";
export const store = configureStore({
    reducer: {
        contractAddress: contractAddressSlice,
        Search:SearchReducer,
        GetBSCdata:GetBSCdataReducer,
        Gettokeninfodata:GettokeninfodataReducer,
        Score: ScoreReducer,
        Dist: DistReducer
    },
})