import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginErrorType, LoginSubmitType, RegisterErrorType, RegisterSubmitType} from "./Auth-type";
import {setLoading} from "../../app/App-slice";
import {AuthApi} from "./Auth-api";
import {AxiosError} from "axios";
import {changeIsRegister} from "./Auth-slice";

export const setLogin = createAsyncThunk('auth/getDataLogin', async(dataLogin: LoginSubmitType, {rejectWithValue, dispatch}) => {
  dispatch(setLoading('PENDING'))
  try {
    const response = await AuthApi.login(dataLogin);
    dispatch(setLoading('SUCCEEDED'))
    return response.data;
  } catch(e) {
    dispatch(setLoading('FAILED'))
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const register = createAsyncThunk('auth/register', async(dataRegister: RegisterSubmitType, {rejectWithValue, dispatch}) => {
  dispatch(setLoading('PENDING'))
  try {
    const response = await AuthApi.register(dataRegister);
    dispatch(setLoading('SUCCEEDED'))
    dispatch(changeIsRegister(true))
    return response.data;
  } catch(e) {
    dispatch(setLoading('FAILED'))
    const error = e as AxiosError<RegisterErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})