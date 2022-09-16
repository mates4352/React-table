import {AppState} from "./store";

export const appSelect = (state: AppState) => state.app;
export const authSelect = (state: AppState) => state.auth;