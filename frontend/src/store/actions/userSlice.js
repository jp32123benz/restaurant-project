import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isRejected: false,
    userData: {},
    loginData: {},
    role: ""
}

// export const fetchUserData = createAsyncThunk(
//     '/dashboard',
//     async (token, id, { rejectWithValue }) => {
//         console.log('token and id', token, id);
//         try {
//             const res = await fetch('http://localhost:4000/api/v1/user/get-user', {
//                 method: 'GET',
//                 headers: {
//                     "Content-type": "application/json",
//                     "Authorization": `Bearers ${token}`
//                 },
//                 body: JSON.stringify(id)
//             })
//             console.log('res in slice ', res);
//             return res
//         } catch (err) {
//             rejectWithValue(err)
//         }
//     }
// )

export const LoginUser = createAsyncThunk(
    '/loginUserData',
    async (loginData, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:4000/api/v1/user/login-user', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(loginData)
            })
            return await res.json()
        } catch (err) {
            rejectWithValue(err)
        }
    })

export const fetchUserData = createAsyncThunk(
    '/getUserData/role',
    async (token, id, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:4000/api/v1/user/get-user/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                },
            })
            return await res.json()
        } catch (err) {
            rejectWithValue(err);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserRole(state, action) {
            state.role = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state, action) => {
                console.log(action.payload);
                state.userData = action.payload
            })
            .addCase(fetchUserData.pending, (state) => {
                state.isRejected = false
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.isRejected = true
            })

            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loginData = action.payload
            })
            .addCase(LoginUser.pending, (state) => {
                state.isRejected = false
            })
            .addCase(LoginUser.rejected, (state) => {
                state.isRejected = true
            })
    }
})

export { getUserRole } from userSlice.actions

export default userSlice.reducer