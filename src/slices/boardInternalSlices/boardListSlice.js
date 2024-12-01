import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

const initialState = {
    listsOfBoard: [],
    listsPending: false,
    listsError: false
}

export const getListsOfBoards = createAsyncThunk('board/lists/getAllLists', async(boardId, _) => {
    const {data} = await axios.get(`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`);
    return data;
})

const listsOfBoardSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListsOfBoards.pending, (state) => {
            state.listsPending = true;
            state.listsError = false;
        }).addCase(getListsOfBoards.fulfilled, (state, action) => {
            state.listsOfBoard = action.payload;
            state.listsPending = false;
            state.listsError = false;
        }).addCase(getListsOfBoards.rejected, (state, action) => {
            state.listsPending = false;
            state.listsError = true;
        })
    }
})

export const listActions = listsOfBoardSlice.actions;
export default listsOfBoardSlice.reducer;