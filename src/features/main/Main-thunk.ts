import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginErrorType} from "../auth/Auth-type";
import {getDataUser} from "../../app/App-thunk";
import {AxiosError} from "axios";
import {MainApi} from "./Main-api";

export const logout = createAsyncThunk('main/logout', async(_, {
  rejectWithValue,
  dispatch,
}) => {
  try {
    await MainApi.logout();
    dispatch(getDataUser())
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})
