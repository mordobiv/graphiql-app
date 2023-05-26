import { createSlice } from '@reduxjs/toolkit';

const graphiqlReducer = createSlice({
  name: 'graphiql',
  initialState: {
    query: '',
    response: '',
    variables: '',
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setVariables(state, action) {
      state.variables = action.payload;
    },
    setRepsonse(state, action) {
      state.response = action.payload;
    }
  },
});

export default graphiqlReducer.reducer;
export const { setQuery, setRepsonse, setVariables } = graphiqlReducer.actions;
