import { configureStore } from '@reduxjs/toolkit'
import FoodSlice from './actions/FoodSlice'
import userSlice from './actions/userSlice'

export const store = configureStore({
    reducer: {
        food: FoodSlice,
        user: userSlice
    },
})
