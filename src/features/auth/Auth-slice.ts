import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {AuthEnum} from "../../utils/enum/auth-enum";


interface AuthStateType {
    value: number
}

const initialState = {

} as AuthStateType;

const authSlice = createSlice({
    name: AuthEnum.LOGIN,
    initialState,
    reducers: {
        [AuthEnum.LOGIN]: (state: AuthStateType, action: PayloadAction<number>) => {

        },

        [AuthEnum.REGISTRATION]: (state: AuthStateType, action: PayloadAction<number>) => {

        },

        [AuthEnum.FORGOT_PASSWORD]: (state: AuthStateType, action: PayloadAction<number>) => {

        },

        [AuthEnum.CHECK_EMAIL]: (state: AuthStateType, action: PayloadAction<number>) => {

        },

        [AuthEnum.CREATE_NEW_PASSWORD]: (state: AuthStateType, action: PayloadAction<number>) => {

        },
    }
});

export const authReducer =  authSlice.reducer;