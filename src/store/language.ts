import { createSlice } from '@reduxjs/toolkit';

const languageReducer = createSlice({
  name: 'language',
  initialState: {
    language: 'en',
  },
  reducers: {
    switchLanguage(state) {
      state.language = state.language === 'en' ? 'ru' : 'en';
    },
  },
});

export default languageReducer.reducer;
export const { switchLanguage } = languageReducer.actions;
