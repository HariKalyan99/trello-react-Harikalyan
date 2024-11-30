import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;


const initialState = {
    boardList: [],
    boardListPending: false,
    boardListError: false
}


export const getAllBoards = createAsyncThunk('boards/getAllBoards', async() => {
    const {data} = await axios.get(`https://api.trello.com/1/members/me/boards?key=${APIKey}&token=${APIToken}`)
    return data
})


const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllBoards.pending, (state) => {
            state.boardListPending = true;
            state.boardListError = false;
        }).addCase(getAllBoards.fulfilled, (state, action) => {
            state.boardList = action.payload;
            state.boardListPending = false;
            state.boardListError = false;
        }).addCase(getAllBoards.rejected, (state) => {
            state.boardListPending = false;
            state.boardListError = true;
        })
    }
})


export const boardActions = boardSlice.actions;
export default boardSlice.reducer;