import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoadingType, UserApiType} from "./App-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getDataUser} from "./App-thunk";

interface AppStateType {
  user: UserApiType
  loading: LoadingType
}

const initialState = {} as AppStateType;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state: AppStateType, action: PayloadAction<LoadingType>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getDataUser.fulfilled, (state: AppStateType, action: PayloadAction<UserApiType>) => {
      state.user = action.payload;
    })
  }
})

const {actions, reducer} = appSlice;
export const {setLoading} = actions;
export const appReducer = reducer;