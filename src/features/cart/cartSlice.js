import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = { items: {} } // {id: {id,name,price,thumb,qty}}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload
      if (!state.items[p.id]) state.items[p.id] = { ...p, qty: 1 }
    },
    increment: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].qty += 1
    },
    decrement: (state, action) => {
      const id = action.payload
      if (state.items[id] && state.items[id].qty > 1) state.items[id].qty -= 1
    },
    removeItem: (state, action) => {
      delete state.items[action.payload]
    },
    clearCart: (state) => { state.items = {} }
  }
})

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

// Selectors
export const selectItemsArr = (state) => Object.values(state.cart.items)
export const selectCount = createSelector(selectItemsArr, arr => arr.reduce((n,i)=>n+i.qty,0))
export const selectTotal = createSelector(selectItemsArr, arr => arr.reduce((s,i)=>s+i.qty*i.price,0))
