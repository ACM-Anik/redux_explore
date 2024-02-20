import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartSliceReducer from './features/cart/cartSlice';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartSliceReducer,
    },
    
});

export default store;