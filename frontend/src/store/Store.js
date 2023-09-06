import { configureStore } from '@reduxjs/toolkit'
import FoodSlice, { fetchFood } from './actions/FoodSlice'
import userSlice from './actions/userSlice'
import CategorySlice from './actions/CategorySlice'

export const store = configureStore({
    reducer: {
        food: FoodSlice, // Add your reducer to the store
        user: userSlice,
        category: CategorySlice,
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(fetchFood);
    // },
})
