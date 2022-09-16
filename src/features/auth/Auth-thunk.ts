import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginErrorType, LoginSubmitType} from "./Auth-type";
import {setLoading} from "../../app/App-slice";
import {AuthApi} from "./Auth-api";
import {AxiosError} from "axios";

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