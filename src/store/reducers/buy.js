import { createSlice } from "@reduxjs/toolkit";
import { fetchBuy } from "./actionCreators";




const initialState = {
    data: [],
    isLoading: false,
    error: '',
}

export const buytSlice = createSlice({
    name: 'buy',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchBuy.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(fetchBuy.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.data = action.payload;
            })
            .addCase(fetchBuy.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

    }
})

export default buytSlice.reducer;