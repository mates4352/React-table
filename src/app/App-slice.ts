import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserApiType} from "./App-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getDataUser} from "./App-thunk";

interface AppStateType {
  user: UserApiType
}

const initialState = {} as AppStateType;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getDataUser.fulfilled, (state: AppStateType, action: PayloadAction<UserApiType>) => {
      state.user = action.payload;
    })
  }
})

const {actions, reducer} = appSlice;
export const appReducer = reducer;