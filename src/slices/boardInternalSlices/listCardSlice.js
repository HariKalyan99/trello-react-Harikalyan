import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

const initialState = {
    cardList: [],
    cardListPending: false,
    cardListError: false,
}
export const getAllCards = createAsyncThunk('boards/lists/getAllCards', async(listId) => {
    const {data} = await axios.get(` https://api.trello.com/1/lists/${listId}/cards?key=${APIKey}&token=${APIToken}
`)
    return data;
}) 

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCards.pending, (state, _) => {
            state.cardListPending = true;
            state.cardListError = false;
        }).addCase(getAllCards.fulfilled, (state, {payload}) => {
            state.cardList = payload
            state.cardListPending = false;
            state.cardListError = false;
        }).addCase(getAllCards.rejected, (state, _) => {
            state.cardListPending = false;
            state.cardListError = true;
        })
    }
})


export const cardActions = cardSlice.actions;
export default cardSlice.reducer;