import { configureStore } from '@reduxjs/toolkit'
import Reducer from "../Redux/Slices/CartSlice/index"
const store=configureStore({
  reducer: Reducer,
  
})
export default store;