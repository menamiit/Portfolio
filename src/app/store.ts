import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

// Persist theme to localStorage on every state change
store.subscribe(() => {
  localStorage.setItem('theme', store.getState().theme.mode)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
