import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../features/auth/Auth-slice";
import {appReducer} from "./App-slice";
import {appLoadState, appSaveState} from "../utils/localStorage/appLocalStorage";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    app: appLoadState('app'),
  }
});

store.subscribe(() => {
  appSaveState(store.getState().app, 'app')
})

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;