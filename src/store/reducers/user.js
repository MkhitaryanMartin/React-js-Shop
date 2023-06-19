import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    isValid: false,
    errorMessage: false,
    activeUserData: "",
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        valid: (state, action) => {
            state.isValid = action.payload
        },
        error: (state, action) => {
            state.errorMessage = action.payload
        },
        activeUser: (state, action) => {
            state.activeUserData = action.payload
        },
    }
})


export const { valid, error, activeUser } = userSlice.actions
export default userSlice.reducer;