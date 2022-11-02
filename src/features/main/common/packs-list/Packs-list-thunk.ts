import {createAsyncThunk} from "@reduxjs/toolkit";
import {CardsPackOptionType, DataEditPackType, DataNewPackType} from "../../Main-type";
import {AxiosError} from "axios";
import {dataEditProfileType, LoginErrorType} from "../../../auth/Auth-type";
import {getDataUser} from "../../../../app/App-thunk";
import {PacksListApi} from "./Packs-list-api";

export const getCardsPack = createAsyncThunk('pack-list/getCardsPack', async (cardsPackOption: CardsPackOptionType, {
  rejectWithValue,
})=>{
  try {
    const response = await PacksListApi.getCardsPack(cardsPackOption);
    return response.data
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const newPack = createAsyncThunk('pack-list/newPack', async (dataNewPack: DataNewPackType, {
  rejectWithValue,
})=>{
  try {
    await PacksListApi.newPack(dataNewPack);
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const editPack = createAsyncThunk('pack-list/editPack', async (dataEditPack: DataEditPackType & {_id: string}, {
  rejectWithValue,
})=>{
  try {
    await PacksListApi.updatePack(dataEditPack);
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const deletePack = createAsyncThunk('pack-list/deletePack', async (idPack: string, {
  rejectWithValue,
})=>{
  try {
    await PacksListApi.deletePack(idPack);
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const editProfile = createAsyncThunk('pack-list/editProfile', async(dataEditProfile: dataEditProfileType, {
  rejectWithValue,
  dispatch,
}) => {
  try {
    await PacksListApi.updateProfile(dataEditProfile);
    dispatch(getDataUser())
  } catch(e) {
    const error = e as AxiosError<LoginErrorType>;
    return rejectWithValue(error.response?.data.error);
  }
})
