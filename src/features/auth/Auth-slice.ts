import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {UserApiType} from "../../app/App-type";

interface AuthStateType {
  login: UserApiType
  error: string
  isRedirect: boolean
}

const initialState = {} as AuthStateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getDataLogin(state: AuthStateType, action: PayloadAction<UserApiType>) {
      state.login = action.payload;
      if(state.error) state.error = '';
    },

    registration(state: AuthStateType) {
      if(state.error) state.error = '';
    },

    setError(state: AuthStateType, action: PayloadAction<string>) {
      state.error = action.payload;
    },

    performRedirect(state: AuthStateType, action: PayloadAction<boolean>) {
      state.isRedirect = action.payload
    }
  },
});

export const {reducer} = authSlice;
export const {
  performRedirect,
  getDataLogin,
  setError,
  registration
} = authSlice.actions
export const authReducer = reducer;