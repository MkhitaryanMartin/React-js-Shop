import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./actionCreators";
import { uniqueId } from "lodash";



const initialState = {
    data: [],
    isLoading: false,
    error: '',
    categoryList: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.categoryList = action.payload.map((el) => {
                return { ...el, id: uniqueId() }
            })
        },
        checked: (state, action) => {
            state.categoryList = state.categoryList.map((el) => {
                if (el.id === action.payload) {
                    return { ...el, complited: !el.complited }
                }
                return el
            })
        },
        dataChecked: (state, action) => {
            state.data = state.data.map((el) => {
                if (el.id === action.payload) {
                    return { ...el, complited: !el.complited }
                }
                return el
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.data = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

    }
})

export const { getCategory, checked, dataChecked } = productSlice.actions
export default productSlice.reducer;

