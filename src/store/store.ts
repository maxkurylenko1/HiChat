import { combineReducers, configureStore, UnknownAction } from '@reduxjs/toolkit';
import SignInSlice from './reducers/SignInSlice';

const rootReducer = combineReducers({
  SignInSlice,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appReducer = (state: any, action: UnknownAction) => {
  if (action.type === 'RESET') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return rootReducer(state, action);
};

export const setupStore = () => configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
