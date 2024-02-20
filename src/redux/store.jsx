import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartSliceReducer from './features/cart/cartSlice';
// import logger from 'redux-logger';
// Note: Though we can use third-party logger but also can use redux old custom (curring type) middleware
import logger from './middlewares/logger';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
});

export default store;