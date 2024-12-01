import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;


const initialState = {
    checkList: [],
    checkListPending: false,
    checkListError: false,
}

export const getCardCheckList = createAsyncThunk('card/checklist/getAllChecklists', async(cardId="674ca2170b09a84c5c4b38bd") => {
        const { data } = await axios.get(
            `https://api.trello.com/1/cards/${cardId}/checklists?key=${APIKey}&token=${APIToken}`
          );
          return data;
})



const checkListSlice = createSlice({
    name: "checklist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCardCheckList.pending, (state) => {
            state.checkListPending = true;
            state.checkListError = false;
        }).addCase(getCardCheckList.fulfilled, (state, {payload}) => {
            state.checkList = payload;
            state.checkListPending = false;
            state.checkListError = false;
        }).addCase(getCardCheckList.rejected, (state, {payload}) => {
            state.checkListPending = false;
            state.checkListError = true;
        })
    }
})


export const cardCheckListActions = checkListSlice.actions;
export default checkListSlice.reducer;