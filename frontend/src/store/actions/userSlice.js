import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    userData: {},
    role: ""
}

export const fetchData = createAsyncThunk(
    '/dashboard',
    async (token, id, { rejectWithValue }) => {
        console.log('token and id', token, id);
        try {
            const res = await fetch('http://localhost:4000/api/v1/user/get-user', {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                },
                body: JSON.stringify(id)
            })
            console.log('res in slice ', res);
            return res
        } catch (err) {
            rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.role = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.userData = action.payload
            })
            .addCase(fetchData.pending, (state) => {
                state.isRejected = false
            })
            .addCase(fetchData.rejected, (state) => {
                state.isRejected = true
            })
    }
})


export const { getUserData } = userSlice.actions

export default userSlice.reducer