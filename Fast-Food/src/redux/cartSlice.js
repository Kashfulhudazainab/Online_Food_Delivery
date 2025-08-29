import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const cartSlice =createSlice({ 
   name:"cart",
   initialState: [],
   reducers:{
    addToCart:(state,action)=>{
        state.find((item)=>item.id===action.payload.id)?state.find((item)=>item.id===action.payload.id).quantity++:
      state.push(action.payload)
    },
    removeItem:(state,action)=>{
     return state.filter((item)=>item.id!==action.payload)
    },
    increaseQuantity:(state,action)=>{
      state.find((item)=>item.id===action.payload).quantity++
    },
    decreaseQuantity:(state,action)=>{
      state.find((item)=>item.id===action.payload).quantity--
    }
   }
})  

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer
export const {removeItem}=cartSlice.actions
export const {increaseQuantity}=cartSlice.actions
export const {decreaseQuantity}=cartSlice.actions