import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer, // Ensure favorites reducer is included
});

export default rootReducer;
