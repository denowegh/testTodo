import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import todo from './todo';
import user from './user';

const rootReducer = combineReducers({
    todo,
    user
});
// add persist config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });

// create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create a store
const store = configureStore({ reducer: persistedReducer, middleware });

// create persistor
const persistor = persistStore(store);

export { store, persistor };

