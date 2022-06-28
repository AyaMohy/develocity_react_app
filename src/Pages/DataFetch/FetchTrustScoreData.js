import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { useState, useEffect } from "react";



export const fetchScore =  createAsyncThunk('score/fetchScore',
async ()=>{
   
    const response = await axios.get("https://api.develocity.finance/api/v1/contract/humanSummary/0x1a57dc4e3BC63B06c2B263774859F227B99Ab031")
    return response.data
      
    });
   

const Score =  createSlice({
    name: " score",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchScore.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchScore.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchScore.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})


export default Score.reducer;