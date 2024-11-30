import { configureStore } from "@reduxjs/toolkit";
import boardReducer from '../slices/boardSlice.js';


export const trelloStore = configureStore({
    reducer: {
        boards: boardReducer
    }
})