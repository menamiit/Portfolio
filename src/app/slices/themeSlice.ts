import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'dark' | 'light'

interface ThemeState {
  mode: Theme
}

const stored = localStorage.getItem('theme') as Theme | null
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const initialState: ThemeState = {
  mode: stored ?? (prefersDark ? 'dark' : 'light'),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.mode = action.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
