import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    select: 0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state) => {
            state.select = state.select + 1;
        },
        remove: (state) => {
            state.select = state.select - 1;
        },

        addByValue: (state, actions) => {
            state.select = state.select + actions.payload;
        }
    },
});

export const { add, remove, addByValue } = cartSlice.actions;
export default cartSlice.reducer;