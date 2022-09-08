import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { _id: null, username: null, email: null, token: null  },
    reducers: {
        setCredentials: (state, action) => {
            const { email, accessToken, username, _id } = action.payload
            state.username = username
            state.email = email
            state.token = accessToken
            state._id = _id
        },
        logOut: (state, action) => {
            state.username = null
            state.email = null
            state.token = null
            state._id = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentEmail = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentUsername = (state) => state.auth.username
export const selectCurrentid = (state) => state.auth._id