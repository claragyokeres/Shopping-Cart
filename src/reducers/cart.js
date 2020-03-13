import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({ ...action.payload, quantity: 1 })
            console.log(action)
        }
    }
})

// Created a new object and spread in the action payload. 