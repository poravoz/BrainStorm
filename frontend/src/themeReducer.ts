import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  backgroundColor: string;
  textColor: string;
}

const initialState: ThemeState = {
  backgroundColor: "#222222",
  textColor: "rgb(174, 178, 184)",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Partial<ThemeState>>) => {
      // Обновление состояния темы на основе действия "setTheme"
      return { ...state, ...action.payload };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;