import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";  

const persistConfig = {
    key: "root",
    storage,
};
const tempReducer = {...rootReducer}
//delete tempReducer.modalSlice
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({  ...tempReducer  })  
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
