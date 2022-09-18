import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginErrorType, LoginSubmitType, RegisterErrorType, RegisterSubmitType} from "./Auth-type";
import {setLoading} from "../../app/App-slice";
import {AuthApi} from "./Auth-api";
import {AxiosError} from "axios";
import {getDataLogin, performRedirect, registration, setError} from "./Auth-slice";

export const setLogin = createAsyncThunk('auth/getDataLogin', async(dataLogin: LoginSubmitType, {
  dispatch
}) => {
  dispatch(setLoading('PENDING'));
  try {
    const response = await AuthApi.login(dataLogin);
    dispatch(getDataLogin(response.data));
    dispatch(setLoading('SUCCEEDED'));
  } catch(e) {
    dispatch(setLoading('FAILED'));
    const error = e as AxiosError<LoginErrorType>;
    error.response?.data.error && dispatch(setError(error.response?.data.error));
  }
})

export const register = createAsyncThunk('auth/register', async(dataRegister: RegisterSubmitType, {
  dispatch
}) => {
  dispatch(setLoading('PENDING'))
  try {
    const response = await AuthApi.register(dataRegister);
    dispatch(setLoading('SUCCEEDED'));
    dispatch(registration());
    dispatch(performRedirect(true));
    return response.data;
  } catch(e) {
    dispatch(setLoading('FAILED'));
    const error = e as AxiosError<RegisterErrorType>;
    error.response?.data.error && dispatch(setError(error.response?.data.error));
  }
})