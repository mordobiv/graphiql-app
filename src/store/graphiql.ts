import { createSlice } from '@reduxjs/toolkit';

const graphiqlReducer = createSlice({
  name: 'graphiql',
  initialState: {
    query: '',
    response: '',
    variables: '',
    headers: '',
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
    },
    setHeaders(state, action) {
      state.headers = action.payload;
    },
  },
});

export default graphiqlReducer.reducer;
export const { setQuery, setRepsonse, setVariables, setHeaders } = graphiqlReducer.actions;
