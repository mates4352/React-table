import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {AuthSliceEnum} from "../../utils/enum/auth-slice-enum";


interface AuthStateType {
  value: number
}

const initialState = {} as AuthStateType;

const authSlice = createSlice({
  name: AuthSliceEnum.LOGIN,
  initialState,
  reducers: {
    [AuthSliceEnum.LOGIN]: (state: AuthStateType, action: PayloadAction<number>) => {

    },

    [AuthSliceEnum.REGISTRATION]: (state: AuthStateType, action: PayloadAction<number>) => {

    },

    [AuthSliceEnum.FORGOT_PASSWORD]: (state: AuthStateType, action: PayloadAction<number>) => {

    },

    [AuthSliceEnum.CHECK_EMAIL]: (state: AuthStateType, action: PayloadAction<number>) => {

    },

    [AuthSliceEnum.CREATE_NEW_PASSWORD]: (state: AuthStateType, action: PayloadAction<number>) => {

    },
  }
});

export const authReducer = authSlice.reducer;