import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { useState, useEffect } from "react";



export const fetchDistribution =  createAsyncThunk('distribution/fetchScore',
async ()=>{
   
    const response = await axios.get("https://api.develocity.finance/api/v1/contract/BSCholderScan?contractAddress=0x1a57dc4e3BC63B06c2B263774859F227B99Ab031")
    return response.data
      
    });
   



const Dist =  createSlice({
    name: " distribution",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchDistribution.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchDistribution.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchDistribution.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})





export default Dist.reducer;