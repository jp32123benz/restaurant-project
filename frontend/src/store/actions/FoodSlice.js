import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    allFoodCollections: []
}

export const fetchFood = createAsyncThunk(
    '/food',
    async ({ rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:4000/api/v1/restaurants-food/create-restaurant-food')
                .then((data) => data.json())
            return res
        } catch (err) {
            rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.allFoodCollections = action.payload
            })
            .addCase(fetchFood.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchFood.rejected, (state, action) => {
                state.isRejected = true
            })
    }
})

// export const { } = userSlice.actions
export default userSlice.reducer