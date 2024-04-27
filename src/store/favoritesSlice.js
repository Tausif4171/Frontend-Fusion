import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [], // Array of favorite products
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectFavorites = state => state.favorites.favorites;

export default favoritesSlice.reducer;
