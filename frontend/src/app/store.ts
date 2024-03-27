import { configureStore } from '@reduxjs/toolkit'
import storeSliderReducer from '../features/store-page/popular-devices/store-slider-slice'

const store = configureStore({
  reducer: {
    storeSlider: storeSliderReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store