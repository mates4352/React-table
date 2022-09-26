import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  ForgotPasswordType,
  LoginErrorType,
  LoginSubmitType, NewPasswordType,
  RegisterErrorType,
  RegisterSubmitType
} from "./Auth-type";
import {AuthApi} from "./Auth-api";
import {AxiosError} from "axios";
import {getDataUser} from "../../app/App-thunk";

export const setLogin = createAsyncThunk('auth/setDataLogin', async(dataLogin: LoginSubmitType, {
  rejectWithValue,
  dispatch,
}) => {
  try {
    await AuthApi.login(dataLogin);
    dispatch(getDataUser());
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const register = createAsyncThunk('auth/register', async(dataRegister: RegisterSubmitType, {
  rejectWithValue
}) => {
  try {
    await AuthApi.register(dataRegister);
  } catch(e) {
    const error = e as AxiosError<RegisterErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const restorePassword = createAsyncThunk('auth/restorePassword', async(dataForgotPassword: ForgotPasswordType, {
  rejectWithValue,
}) => {
  try {
    await AuthApi.restorePassword(dataForgotPassword);
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const setNewPassword = createAsyncThunk('auth/setNewPassword', async(dataNewPassword: NewPasswordType, {
  rejectWithValue,
}) => {
  try {
    await AuthApi.setNewPassword(dataNewPassword);
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})