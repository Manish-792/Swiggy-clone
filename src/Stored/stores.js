import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";

// --- Redux Persist Imports ---
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// --- Persist Config ---
// This tells redux-persist how to store the data.
const persistConfig = {
  key: 'root', // The key for the data in localStorage
  storage,     // The storage engine to use (localStorage)
  // You can optionally whitelist or blacklist reducers here
};

// --- Create a Persisted Reducer ---
// This wraps your existing CartReducer with the persistence logic.
const persistedReducer = persistReducer(persistConfig, CartReducer);

// --- Configure the Store ---
// We now use the persistedReducer instead of the original one.
export const store = configureStore({
    reducer:{
        cartslice: persistedReducer,
    },
    // This middleware is recommended by redux-persist to avoid non-serializable value errors.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

// --- Create a Persistor ---
// This object is used to control the persistence process.
export const persistor = persistStore(store);
