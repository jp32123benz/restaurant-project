import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    allFoodCollections: [],
    singleFoodCollection: {}
}


export const fetchFood = createAsyncThunk(
    '/dashboard/food-list',
    async (_, { rejectWithValue }) => { // Remove the parameter and use underscore (_) to indicate no arguments are needed
        const token = localStorage.getItem('token');
        try {
            const res = await fetch('http://localhost:4000/api/v1/restaurants-food/find-restaurant-food', {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                }
            });
            const result = await res.json();
            return result;
        } catch (err) {
            return rejectWithValue(err); // Return an action with an error value
        }
    }
);

export const fetchSingleFood = createAsyncThunk(
    '/fetchSingleFood',
    async (id, { rejectWithValue }) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:4000/api/v1/restaurants-food/find-restaurant-food/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
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
            .addCase(fetchFood.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchFood.rejected, (state) => {
                state.isRejected = true
            })

            .addCase(fetchSingleFood.fulfilled, (state, action) => {
                state.singleFoodCollection = action.payload.findSingleData
            })
            .addCase(fetchSingleFood.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchSingleFood.rejected, (state) => {
                state.isRejected = true
            })
    }
})

// export const { } = userSlice.actions
export default FoodSlice.reducer;
