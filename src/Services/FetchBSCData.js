import axios from "axios";
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBSCResult=createAsyncThunk('search/fetchBSCResult',
    async(contract)=>{
        const response= await axios.get(`https://api.develocity.finance/api/v1/contract/getBSCContractDetail/${contract}`) 
        return response.data
    }
);

const GetBSCdata=createSlice({
    name:'search',
    reducers:{

    },
    initialState:{
        data:[],
        status:null
    },
    extraReducers:{
        [fetchBSCResult.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchBSCResult.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchBSCResult.rejected] : (state) =>{
            state.status = "failed";

        }
    }

})

export default GetBSCdata.reducer;
