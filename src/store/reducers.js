import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
});

export default rootReducer;
