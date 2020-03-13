import { createSlice } from '@reduxjs/toolkit'

// Creating a logic for the added item. Then reversing the logic for removing items from cart

export const cart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if (existingProduct && existingProduct.quantity === 1) {
                //remove the product entirely if it is less than one 
                state.items = state.items.filter((item) => item.id === action.payload.id)
            } else if (existingProduct) {
                existingProduct.quantity -= 1
            }
        }
    }
})
