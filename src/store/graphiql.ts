import { createSlice } from '@reduxjs/toolkit';

const graphiqlReducer = createSlice({
  name: 'graphiql',
  initialState: {
    query: '',
    response: '',
    variables: '',
    headers: '',
    isVariablesSectionHidden: true,
    isHeadersSectionHidden: true,
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
    switchVariablesSection(state, action) {
      state.isVariablesSectionHidden = action.payload;
    },
    switchHeadersSection(state, action) {
      state.isHeadersSectionHidden = action.payload;
    },
  },
});

export default graphiqlReducer.reducer;
export const { setQuery, setRepsonse, setVariables, setHeaders, switchVariablesSection, switchHeadersSection } = graphiqlReducer.actions;
