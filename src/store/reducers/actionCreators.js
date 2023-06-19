import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { uniqBy } from "lodash";

export const fetchProduct = createAsyncThunk(
    'product/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            const data = response.data.map((el) => {
                return { ...el, complited: false, }
            });

            const localData = JSON.parse(localStorage.getItem("bookMark"))
            if (localData?.length && localData && localData[0]) {
                return uniqBy([...localData, ...data], "id")
            } else {
                return data
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const fetchBuy = createAsyncThunk(
    'buy/fetch',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
export const fetchAllProduct = createAsyncThunk(
    'allProduct/fetch',
    async (page, thunkAPI) => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }

)