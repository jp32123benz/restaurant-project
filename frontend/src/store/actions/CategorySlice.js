import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    allCategory: []
}

export const fetchCategory = createAsyncThunk(
    '/dashboard',
    async ({ rejectWithValue }) => {
        console.log('are we here');
        try {
            const res = await fetch('http://localhost:4000/api/v1/category/get-category')
                .then((data) => data.json())
            console.log('res------------', res);
            return res
        } catch (err) {
            rejectWithValue(err)
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.allCategory.push(action.payload)
            })
            .addCase(fetchCategory.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.isRejected = true
            })
    }
})

// export const { } = categorySlice.actions
export default categorySlice.reducer