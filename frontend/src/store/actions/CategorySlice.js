import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    allCategory: []
}

export const fetchCategory = createAsyncThunk(
    '/dashboard/create-food',
    async ({ rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:4000/api/v1/category/get-category')
                .then((data) => data.json())
            return res
        } catch (err) {
            rejectWithValue(err)
        }
    }
)

const categorySlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.allCategory.push(action.payload)
            })
            .addCase(fetchFood.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchFood.rejected, (state, action) => {
                state.isRejected = true
            })
    }
})

// export const { } = categorySlice.actions
export default categorySlice.reducer