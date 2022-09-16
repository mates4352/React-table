import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoadingType} from "./App-type";

interface AppStateType {
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
  }
})

const {actions, reducer} = appSlice;
export const {setLoading} = actions;
export const appReducer = reducer;