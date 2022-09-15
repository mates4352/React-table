import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadingType} from "./App-type";

interface AppStateType {
  loading: loadingType
}

const initialState = {} as AppStateType;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state: AppStateType, action: PayloadAction<loadingType>) {
      state.loading = action.payload;
    },
  }
})

const {actions, reducer} = appSlice;
export const {setLoading} = actions;
export const appReducer = reducer;