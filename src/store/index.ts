import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageReducer from './language';

const rootReducer = combineReducers({
  languageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
