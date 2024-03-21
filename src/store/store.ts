import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

// const appReducer = (state: any, action: UnknownAction) => {
//   if (action.type === 'RESET') {
//     // eslint-disable-next-line no-param-reassign
//     state = undefined;
//   }

//   return rootReducer(state, action);
// };

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
