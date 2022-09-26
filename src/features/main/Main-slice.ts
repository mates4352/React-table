import {createSlice} from "@reduxjs/toolkit";


interface MainStateType {

}

const initialState = {

} as MainStateType;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
});

export const {reducer} = mainSlice;
export const mainReducer = reducer;