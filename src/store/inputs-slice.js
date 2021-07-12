import { createSlice } from '@reduxjs/toolkit';

const inputsSlice = createSlice({
        name: 'inputs',
        initialState: {
            firstName: null,
            lastName: null,
            email: null
        },
        reducers: {
            setUser(state, action) {
        }
    }
})

export const inputsActions = inputsSlice.action;
export default inputsSlice;