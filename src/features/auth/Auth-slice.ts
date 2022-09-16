import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {LoginApiType} from "./Auth-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {register, setLogin} from "./Auth-thunk";

interface AuthStateType {
  login: LoginApiType
  error: string
  isRegister: boolean
}

const initialState = {} as AuthStateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getDataLogin(state: AuthStateType, action: PayloadAction<LoginApiType>) {

    },

    registration(state: AuthStateType, action: PayloadAction<number>) {

    },

    forgotPassword(state: AuthStateType, action: PayloadAction<number>) {

    },

    createNewPassword(state: AuthStateType, action: PayloadAction<number>) {

    },
    changeIsRegister(state: AuthStateType, action: PayloadAction<boolean>){
      state.isRegister = action.payload
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(setLogin.fulfilled, (state: AuthStateType, action: PayloadAction<LoginApiType>) => {
      state.login = action.payload;
      if(state.error) state.error = '';
    })
    builder.addCase(setLogin.rejected, (state: AuthStateType, action: PayloadAction<any>) => {
     state.error = action.payload;
    })
    builder.addCase(register.fulfilled, (state: AuthStateType) => {
      if(state.error) state.error = '';
    })
    builder.addCase(register.rejected, (state: AuthStateType, action: PayloadAction<any>) => {
      state.error = action.payload;
    })
  }
});

export const {reducer} = authSlice;
export const {changeIsRegister} = authSlice.actions
export const authReducer = reducer;