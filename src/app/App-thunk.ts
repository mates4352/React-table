import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppApi} from "./App-api";

export const getDataUser = createAsyncThunk('auth/getDataUser', async() => {
  const response = await AppApi.getMe();
  return response.data;
})