import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {LoginApiType, LoginErrorType, LoginSubmitType} from "./Auth-type";
import {AuthApi} from "./Auth-api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {AxiosError} from "axios";
import {setLoading} from "../../app/App-slice";
import {setLogin} from "./Auth-thunk";

interface AuthStateType {
  login: LoginApiType
  error: string
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
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(setLogin.fulfilled, (state: AuthStateType, action: PayloadAction<LoginApiType>) => {
      state.login = action.payload;
      if(state.error) state.error = '';
    })
    builder.addCase(setLogin.rejected, (state: AuthStateType, action: PayloadAction<any>) => {
     state.error = action.payload;
    })
  }
});

export const {reducer} = authSlice;
export const authReducer = reducer;