// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'; // import without curly braces

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;
