import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingsReducer from './slices/settings';
import userReducer from './slices/user';
import editorReducer from './slices/editor';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  user: userReducer,
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
