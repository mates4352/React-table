import {createAsyncThunk} from "@reduxjs/toolkit";
import {dataEditProfileType, LoginErrorType} from "../auth/Auth-type";
import {getDataUser} from "../../app/App-thunk";
import {AxiosError} from "axios";
import {MainApi} from "./Main-api";
import {CardsPackOptionType, DataEditPackType, DataNewPackType} from "./Main-type";

export const getCardsPack = createAsyncThunk('main/getCardsPack', async (cardsPackOption: CardsPackOptionType, {
  rejectWithValue,
})=>{
  try {
    const response = await MainApi.getCardsPack(cardsPackOption);
    return response.data
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const newPack = createAsyncThunk('main/newPack', async (dataNewPack: DataNewPackType, {
  rejectWithValue,
  dispatch,
})=>{
  try {
    await MainApi.newPack(dataNewPack);
    dispatch(getCardsPack({page: 1, pageCount: 8}))
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const editPack = createAsyncThunk('main/editPack', async (dataEditPack: DataEditPackType & {_id: string}, {
  rejectWithValue,
  dispatch,
})=>{
  try {
    await MainApi.updatePack(dataEditPack);
    dispatch(getCardsPack({page: 1, pageCount: 8}))
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const deletePack = createAsyncThunk('main/deletePack', async (idPack: string, {
  rejectWithValue,
  dispatch,
})=>{
  try {
    await MainApi.deletePack(idPack);
    dispatch(getCardsPack({page: 1, pageCount: 8}))
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
