import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settings';
import userReducer from './slices/user';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    user: userReducer,
  },
});

export default store;
