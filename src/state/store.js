import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import accountReducer from './slices/account';
import settingsReducer from './slices/settings';
import editorReducer from './slices/editor';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account', 'settings'],
};

const rootReducer = combineReducers({
  account: accountReducer,
  settings: settingsReducer,
  editor: editorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);

export default store;
