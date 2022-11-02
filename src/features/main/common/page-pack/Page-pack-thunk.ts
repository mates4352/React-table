import {createAsyncThunk} from "@reduxjs/toolkit";
import {pagePackApi} from "./Page-pack-api";
import {AxiosError} from "axios";
import {dataCardType, getPackCardsType} from "./Page-pack-type";

export const getPackCards = createAsyncThunk('pagePack/getPackCards', async (dataPackCards: getPackCardsType, {
  rejectWithValue
}) => {
  try {
    const response = await pagePackApi.getPackCards(dataPackCards)
    return response.data
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const addCard = createAsyncThunk('pagePack/addCard', async (dataCard: dataCardType, {
  rejectWithValue
}) => {
  try {
    const response = await pagePackApi.setCard(dataCard)
    return response.data
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})
