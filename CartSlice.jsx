
import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  items: [] // each item: {id, name, price, image, quantity}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const incoming = action.payload
      const existing = state.items.find(i => i.id === incoming.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...incoming, quantity: 1 })
      }
    },
    removeItem(state, action) {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find(i => i.id === id)
      if (!item) return
      if (quantity <= 0) {
        state.items = state.items.filter(i => i.id !== id)
      } else {
        item.quantity = quantity
      }
    }
  }
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer

// Selectors
export const selectCartItems = state => state.cart.items
export const selectCartCount = createSelector(selectCartItems, items => items.reduce((sum, i) => sum + i.quantity, 0))
export const selectCartTotal = createSelector(selectCartItems, items => items.reduce((sum, i) => sum + i.price * i.quantity, 0))
