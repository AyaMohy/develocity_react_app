import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { useState, useEffect } from "react";



export const fetchResult =  createAsyncThunk('search/fetchResult',
async (searchKey)=>{
   
    const response = await axios.get(`https://api.develocity.finance/api/v1/user/suggestion?name=${searchKey}`)
    console.log(response)
    return response.data
   
    });
   



const Search =  createSlice({
    name: " search",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchResult.fulfilled] : (state,payload) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchResult.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchResult.rejected] : (state) =>{
            state.status = "failed";
            
            
            console.log(state.status )
        }

    }
})





export default Search.reducer;