import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { orderAPI } from '../services/OrderService';
import filterReducer from './reducers/FilterSlice';

const rootReducer = combineReducers({
  filterReducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(orderAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
