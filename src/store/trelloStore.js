import { configureStore } from "@reduxjs/toolkit";
import boardReducer, { getAllBoards } from '../slices/boardSlice.js';


export const trelloStore = configureStore({
    reducer: {
        boards: boardReducer
    }
})

// setInterval(() => {
    trelloStore.dispatch(getAllBoards());
// }, 2000)