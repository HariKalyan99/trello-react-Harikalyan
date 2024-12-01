import { configureStore } from "@reduxjs/toolkit";
import boardReducer, { getAllBoards } from '../slices/boardSlice.js';
import listReducer from '../slices/boardInternalSlices/boardListSlice.js'


export const trelloStore = configureStore({
    reducer: {
        boards: boardReducer,
        lists: listReducer
    }
})

// setInterval(() => {
    trelloStore.dispatch(getAllBoards());
// }, 2000)