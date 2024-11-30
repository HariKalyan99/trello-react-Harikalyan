import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;


const initialState = {
    boardList: [],
    boardListPending: false,
    boardListError: false,
    postBoardPending: false,
    postBoardError: false,
}


export const getAllBoards = createAsyncThunk('boards/getAllBoards', async() => {
    const {data} = await axios.get(`https://api.trello.com/1/members/me/boards?key=${APIKey}&token=${APIToken}`)
    return data
})

export const postNewBoard = createAsyncThunk('boards/postNewBoard', async(name) => {
    const {data} = await axios.get(`https://api.trello.com/1/boards/?name=${name}&key=${APIKey}&token=${APIToken}`)
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
        }),


        builder.addCase(postNewBoard.pending, (state) => {
            state.postBoardPending = true;
            state.postBoardError = false;
        }).addCase(postNewBoard.fulfilled, (state, action) => {
            state.boardList = [...state.boardList, action.payload];
            state.postBoardPending = false;
            state.postBoardError = false;
        }).addCase(postNewBoard.rejected, (state) => {
            state.postBoardPending = false;
            state.postBoardError = true;
        })
    }
})

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;