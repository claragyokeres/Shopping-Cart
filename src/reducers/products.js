import { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'New Balance', price: 999, emoji: '👟' },
    { id: 2, title: 'Adidas Superstar', price: 999, emoji: '👟' },
    { id: 3, title: 'Jordan Air', price: 999, emoji: '👟' },
    { id: 4, title: 'Saucony', price: 999, emoji: '👟' }
]

// here is where I wanted to fetch data from the API, but using a set model without a changing state for now. 
export const products = createSlice({
    name: 'products',
    initialState: productData
})