import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserApiType} from "./App-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getDataUser} from "./App-thunk";

export interface AppStateType {
  user: UserApiType
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
} as AppStateType;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getDataUser.fulfilled.type, (state: AppStateType, action: PayloadAction<UserApiType>) => {
      state.user = action.payload;
    })
    .addCase(getDataUser.rejected.type, (state: AppStateType, action: PayloadAction<UserApiType>) => {
      state.user = action.payload;
    })
  }
})

const {reducer} = appSlice;
export const appReducer = reducer;
