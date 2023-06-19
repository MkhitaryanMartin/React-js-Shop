import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct } from "./actionCreators";


const initialState = {
    data: [],
    isLoading: false,
    error: '',
    next: 10,
    isfetshing: true,
    nextColor: 0
}

export const allProductSlice = createSlice({
    name: 'allProduct',
    initialState,
    reducers: {
        fetchingOn: (state, action) => {
            state.isfetshing = true
        },
        fetchNext: (state, action) => {
            state.next = state.next + 10
        },
        fetchNextColor: (state, action) => {
            if (state.nextColor < 9) {
                state.nextColor = state.nextColor + 1
            } else {
                state.nextColor = 0
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.data = [...state.data, ...action.payload];
                state.isfetshing = false

            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

    }
})

export const { fetchingOn, fetchNext, fetchNextColor } = allProductSlice.actions
export default allProductSlice.reducer;