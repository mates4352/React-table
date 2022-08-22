import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
