import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectCartItems = state => state.cart.cartItems;

export default cartSlice.reducer;
