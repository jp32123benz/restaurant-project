import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    allFoodCollections: []
}


export const fetchFood = createAsyncThunk(
    'dashboard/food-list',
    async (_, { rejectWithValue }) => { // Remove the parameter and use underscore (_) to indicate no arguments are needed
        const token = sessionStorage.getItem('token');
        try {
            const res = await fetch('http://localhost:4000/api/v1/restaurants-food/find-restaurant-food', {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}` // Fix the typo "Bearers" to "Bearer"
                }
            });
            const result = await res.json();
            return result;
        } catch (err) {
            return rejectWithValue(err); // Return an action with an error value
        }
    }
);


const FoodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.allFoodCollections = action.payload.aggregationResult
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
export default FoodSlice.reducer;
