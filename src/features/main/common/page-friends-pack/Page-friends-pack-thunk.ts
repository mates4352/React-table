import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPackCardsType} from "../page-pack/Page-pack-type";
import {MainApi} from "../../Main-api";
import {AxiosError} from "axios";

export const getPackFriendsCards = createAsyncThunk('pagePack/getPackFriendsCards', async (dataPackCards: getPackCardsType, {
  rejectWithValue
}) => {
  try {
    const response = await MainApi.getPackCards(dataPackCards)
    return response.data
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})
