import { createSlice } from "@reduxjs/toolkit";
import { Product, StoreSliderState } from "./entities/entities";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { RootState} from "../../../app/store";
import { addProduct, getProducts, updateProduct, deleteProduct } from "./store-slider-api";

const initialState: StoreSliderState = {
    products: {
        isLoading: false,
        status: '',
        values: []
    },
    wishList: {
        isLoading: false,
        status: '',
        values: []
    }
}

const StoreSliderSlice = createSlice({
    name: "storeSlider",
    initialState,
    reducers: {
    //     addProduct: (state, action: PayloadAction<Product>) => {
    //         state.products.push(action.payload);
    //     },
    //     remProduct: (state, action: PayloadAction<Product>) => {
    //         const index = state.products.findIndex(product => product._id === action.payload._id);
            
    //         if (index !== -1) {
    //             state.products.splice(index, 1);
    //         }
    //     }
    },
    extraReducers: (builder: ActionReducerMapBuilder<StoreSliderState>) => {
        
        builder.addCase(getProducts.pending.type, (state, action) => {
                state.products.status = "pending";
                state.products.isLoading = true;
        });
        
        builder.addCase(getProducts.fulfilled.type, (state, action: PayloadAction<Product[]>) => {
            state.products.status = "success";
            state.products.isLoading = false;
            state.products.values = action.payload;

        });

        builder.addCase(getProducts.rejected.type, (state, action) => {
            state.products.status = "failed";
            state.products.isLoading = true; 
        });

        builder.addCase(addProduct.pending.type, (state, action) => { // @todo add asyncThunk to add product to wishList
            state.wishList.status = "pending";
            state.wishList.isLoading = true;
        });
        
        builder.addCase(addProduct.fulfilled.type, (state, action: PayloadAction<Product>) => {
            state.wishList.status = "success";
            state.wishList.isLoading = false;
            state.wishList.values.push(action.payload);

        });

        builder.addCase(addProduct.rejected.type, (state, action) => {
            state.wishList.status = "failed";
            state.wishList.isLoading = true; 
        });

        // [getEmployees.fulfilled.type]: (state, { payload }) => {
        //     state.list.status = "success"
        //     state.list.values = payload
        //     state.list.isLoading = false
        // },
        // [getEmployees.rejected.type]: (state, action) => {
        //     state.list.status = "failed"
        //     state.list.isLoading = false
        // },
        // [addEmployee.pending.type]: (state, action) => {
        //     state.save.isSaving = true
        // },
        // [addEmployee.fulfilled.type]: (state, action) => {
        //     state.save.isSaving = false
        // },
        // [addEmployee.rejected.type]: (state, action) => {
        //     state.save.isSaving = false
        // },
        // [updateEmployee.pending.type]: (state, action) => {
        //     state.save.isSaving = true
        // },
        // [updateEmployee.fulfilled.type]: (state, action) => {
        //     state.save.isSaving = false
        // },
        // [updateEmployee.rejected.type]: (state, action) => {
        //     state.save.isSaving = false
        // },
        // [deleteEmployee.pending.type]: (state, action) => {
        //     state.save.isDeleting = true
        // },
        // [deleteEmployee.fulfilled.type]: (state, action) => {
        //     state.save.isDeleting = false
        // },
        // [deleteEmployee.rejected.type]: (state, action) => {
        //     state.save.isDeleting = false
        // }
    }
})

export const selectProducts = (state: RootState) => {return state.storeSlider.products.values}
export const selectWishListProducts = (state: RootState) => {return state.storeSlider.wishList.values}

// export const {addProduct, remProduct} = StoreSliderSlice.actions;
export default StoreSliderSlice.reducer;

// const StoreSliderSlice = createSlice({
//     name: "storeSlider",
//     initialState,
//     // reducers: {
//     //     addProduct: (state, action: PayloadAction<Product>) => {
//     //         state.products.push(action.payload);
//     //     },
//     //     remProduct: (state, action: PayloadAction<Product>) => {
//     //         const index = state.products.findIndex(product => product._id === action.payload._id);
            
//     //         if (index !== -1) {
//     //             state.products.splice(index, 1);
//     //         }
//     //     }
//     // },
//     extraReducers: (builder: ActionReducerMapBuilder<WishList>) => {
        
//         // [getEmployees.pending.type]: (state, action) => {
//         //     state.list.status = "pending"
//         //     state.list.isLoading = true
//         // },
//         // [getEmployees.fulfilled.type]: (state, { payload }) => {
//         //     state.list.status = "success"
//         //     state.list.values = payload
//         //     state.list.isLoading = false
//         // },
//         // [getEmployees.rejected.type]: (state, action) => {
//         //     state.list.status = "failed"
//         //     state.list.isLoading = false
//         // },
//         // [addEmployee.pending.type]: (state, action) => {
//         //     state.save.isSaving = true
//         // },
//         // [addEmployee.fulfilled.type]: (state, action) => {
//         //     state.save.isSaving = false
//         // },
//         // [addEmployee.rejected.type]: (state, action) => {
//         //     state.save.isSaving = false
//         // },
//         // [updateEmployee.pending.type]: (state, action) => {
//         //     state.save.isSaving = true
//         // },
//         // [updateEmployee.fulfilled.type]: (state, action) => {
//         //     state.save.isSaving = false
//         // },
//         // [updateEmployee.rejected.type]: (state, action) => {
//         //     state.save.isSaving = false
//         // },
//         // [deleteEmployee.pending.type]: (state, action) => {
//         //     state.save.isDeleting = true
//         // },
//         // [deleteEmployee.fulfilled.type]: (state, action) => {
//         //     state.save.isDeleting = false
//         // },
//         // [deleteEmployee.rejected.type]: (state, action) => {
//         //     state.save.isDeleting = false
//         // }
//     }
// })
