import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    select: 0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        include: (state) => {
            state.select = state.select + 1;
        },

        extract: (state) => {
            state.select = state.select - 1;
        },

        addByValue: (state, actions) => {
            state.select = state.select + actions.payload;
        }
    },
});

export const { include, extract, addByValue } = cartSlice.actions;
export default cartSlice.reducer;