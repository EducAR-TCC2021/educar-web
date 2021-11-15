import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { entitiesReducer, queriesReducer, queryMiddleware } from 'redux-query';
import superagentInterface from 'redux-query-interface-superagent';
import storage from 'redux-persist/lib/storage';

import accountReducer from './slices/account';
import settingsReducer from './slices/settings';
import editorReducer from './slices/editor';
import homeReducer from './slices/home';
import blobFilesReducer from './slices/blobs';
import overlayModalReducer from './slices/overlayModal';

export const selectQueries = (state) => state.queries;
export const selectEntities = (state) => state.entities;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account', 'settings', 'home'],
};

const rootReducer = combineReducers({
  account: accountReducer,
  settings: settingsReducer,
  editor: editorReducer,
  blobFiles: blobFilesReducer,
  entities: entitiesReducer,
  queries: queriesReducer,
  home: homeReducer,
  overlayModal: overlayModalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(queryMiddleware(superagentInterface, selectQueries, selectEntities)),
});
export const persistor = persistStore(store);

export default store;
