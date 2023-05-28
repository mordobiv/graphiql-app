import { createSlice } from '@reduxjs/toolkit';

const headerReducer = createSlice({
  name: 'graphiql',
  initialState: {
    isScrolled: false,
  },
  reducers: {
    setIsScrolled(state, action) {
      state.isScrolled = !!action.payload;
    }
  },
});

export default headerReducer.reducer;
export const { setIsScrolled } = headerReducer.actions;
