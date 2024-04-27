import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your combined reducers

const store = configureStore({
    reducer: rootReducer, // Use the combined reducers
});

export default store;
