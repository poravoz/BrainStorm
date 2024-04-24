import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api";
import { Product } from "./entities/entities";


export const getProducts = createAsyncThunk("wishList/getProducts", async () => {
    try {
        const response = await API.get("keyboards") // @todo get devices by wishlist id  
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const addProduct = createAsyncThunk("wishList/addProduct", async (product: Product) => {
    try {
        const response = await API.post("keyboards", product)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const updateProduct = createAsyncThunk("wishList/updateProduct",
    async (product: Product) => {
        try {
            const response = await API.put(`keyboards/${product._id}`, product); // @todo upadate patch
            return response.data
        } catch (error) {
            console.log(error)
        }
    }) 

export const deleteProduct = createAsyncThunk("wishList/deleteProduct", async (productId: number) => {
    try {
        const response = await API.delete(`keyboards/${productId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})