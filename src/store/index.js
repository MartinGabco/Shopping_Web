import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket.slice";
import inputsSlice from './inputs-slice';

const store = configureStore({
    reducer: { basket: basketSlice.reducer, inputs: inputsSlice.reducer }
});

export default store;