import {createAsyncThunk} from "@reduxjs/toolkit";
import {dataEditProfileType, LoginErrorType} from "../auth/Auth-type";
import {getDataUser} from "../../app/App-thunk";
import {AxiosError} from "axios";
import {MainApi} from "./Main-api";

export const getCardsPack = createAsyncThunk('main/getCardsPack', async (_, {
  rejectWithValue,
  dispatch,
})=>{
  try {
    const response = await MainApi.getCardsPack();
    return response.data
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const editProfile = createAsyncThunk('main/editProfile', async(dataEditProfile: dataEditProfileType, {
  rejectWithValue,
  dispatch,
}) => {
  try {
    await MainApi.updateProfile(dataEditProfile);
    dispatch(getDataUser())
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

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
