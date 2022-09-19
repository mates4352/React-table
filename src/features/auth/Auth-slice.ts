import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {LoadingType, UserApiType} from "../../app/App-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {register, restorePassword, setLogin} from "./Auth-thunk";
import {Statuses} from "../../utils/enum/statuses";

interface AuthStateType {
  login: UserApiType
  error: string
  loading: LoadingType
  isRedirect: boolean
}

const initialState = {} as AuthStateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    performRedirect(state: AuthStateType, action: PayloadAction<boolean>) {
      state.isRedirect = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(setLogin.pending.type, (state: AuthStateType) => {
      state.loading = Statuses.PENDING;
    })

    builder.addCase(setLogin.fulfilled.type, (state: AuthStateType, action: PayloadAction<UserApiType>) => {
      state.login = action.payload;
      if(state.error) state.error = '';
      state.loading = Statuses.SUCCEEDED;
    })

    builder.addCase(setLogin.rejected.type, (state: AuthStateType, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = Statuses.FAILED;
    })

    builder.addCase(register.pending.type, (state: AuthStateType) => {
      state.loading = Statuses.PENDING;
    })

    builder.addCase(register.fulfilled.type, (state: AuthStateType) => {
      if(state.error) state.error = '';
      state.isRedirect = true;
      state.loading = Statuses.SUCCEEDED;
    })

    builder.addCase(register.rejected.type, (state: AuthStateType, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = Statuses.FAILED;
    })

    builder.addCase(restorePassword.pending.type, (state: AuthStateType) => {
      state.loading = Statuses.PENDING;
    })

    builder.addCase(restorePassword.fulfilled.type, (state: AuthStateType) => {
      if(state.error) state.error = '';
      state.loading = Statuses.SUCCEEDED;
    })

    builder.addCase(restorePassword.rejected.type, (state: AuthStateType, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = Statuses.FAILED;
    })
  }
});

export const {reducer} = authSlice;
export const {
  performRedirect,
} = authSlice.actions
export const authReducer = reducer;