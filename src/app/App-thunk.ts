import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppApi} from "./App-api";
import {AxiosError} from "axios";
import {LoginErrorType} from "../features/auth/Auth-type";

export const getDataUser = createAsyncThunk('auth/getDataUser', async(_, {
  rejectWithValue
}) => {
  try {
    const response = await AppApi.getMe();
    return response.data;
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})