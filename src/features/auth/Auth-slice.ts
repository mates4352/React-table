import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {LoadingType, UserApiType} from "../../app/App-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {editProfile, register, restorePassword, setLogin, setNewPassword} from "./Auth-thunk";
import {Statuses} from "../../utils/enum/statuses";

interface AuthStateType {
  user: UserApiType
  error: string
  loading: LoadingType | ''
}

const initialState = {
  user: {
    created: '',
    email: '',
    isAdmin: false,
    name: '',
    publicCardPacksCount: null,
    rememberMe: false,
    token: '',
    tokenDeathTime: null,
    updated: '',
    verified: false,
    __v: null,
    _id: '',
  },
  error: '',
  loading: ''
} as AuthStateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(setLogin.pending.type, (state: AuthStateType) => {
      state.loading = Statuses.PENDING;
    })

    builder.addCase(setLogin.fulfilled.type, (state: AuthStateType, action: PayloadAction<UserApiType>) => {
      state.user = action.payload;
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

    builder.addCase(setNewPassword.pending.type, (state: AuthStateType) => {
      state.loading = Statuses.PENDING;
    })

    builder.addCase(setNewPassword.fulfilled.type, (state: AuthStateType) => {
      if(state.error) state.error = '';
      state.loading = Statuses.SUCCEEDED;
    })

    builder.addCase(setNewPassword.rejected.type, (state: AuthStateType, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = Statuses.FAILED;
    })

    builder.addCase(editProfile.pending.type, (state: AuthStateType) => {
      state.loading = Statuses.PENDING;
    })

    builder.addCase(editProfile.fulfilled.type, (state: AuthStateType) => {
      if(state.error) state.error = '';
      state.loading = Statuses.SUCCEEDED;
    })

    builder.addCase(editProfile.rejected.type, (state: AuthStateType, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = Statuses.FAILED;
    })
  }
});

export const {reducer} = authSlice;
export const authReducer = reducer;