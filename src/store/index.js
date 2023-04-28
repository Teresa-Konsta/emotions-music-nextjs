import { configureStore } from '@reduxjs/toolkit';
import pulseSlice from './pulse-slice';

const store = configureStore({
    reducer: {
        pulse: pulseSlice.reducer
    }
});

export default store;