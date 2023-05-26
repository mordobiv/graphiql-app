import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageReducer from './language';
import graphiqlReducer from './graphiql';

const rootReducer = combineReducers({
  languageReducer,
  graphiqlReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
