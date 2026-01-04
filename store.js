
import { configureStore } from '@reduxjs/toolkit'
import cart from './CartSlice.jsx'

const store = configureStore({
  reducer: { cart }
})

export default store
