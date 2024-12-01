import { configureStore } from "@reduxjs/toolkit";
import boardReducer, { getAllBoards } from '../slices/boardSlice.js';
import listReducer from '../slices/boardInternalSlices/boardListSlice.js'
import cardReducer from '../slices/boardInternalSlices/listCardSlice.js'


export const trelloStore = configureStore({
    reducer: {
        boards: boardReducer,
        lists: listReducer,
        cards: cardReducer
    }
})

// setInterval(() => {
    trelloStore.dispatch(getAllBoards());
// }, 2000)