import { configureStore } from '@reduxjs/toolkit';
import plants from './plantsSlice'
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
        plants,
        cart
    }
})