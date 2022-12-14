import {createAsyncThunk} from "@reduxjs/toolkit";
import {pagePackApi} from "./Page-pack-api";
import {AxiosError} from "axios";
import {dataCardType, dataUpdateCardType, getPackCardsType} from "./Page-pack-type";
import {MainApi} from "../../Main-api";

export const getPackMyCards = createAsyncThunk('pagePack/getPackMyCards', async (dataPackCards: getPackCardsType, {
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

export const addCard = createAsyncThunk('pagePack/addCard', async (dataCard: dataCardType, {
  rejectWithValue,
}) => {
  try {
    const response = await pagePackApi.setCard(dataCard)
    return response.data
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const deleteCard = createAsyncThunk('pagePack/deleteCard', async (idCard: string, {
  rejectWithValue,
}) => {
  try {
    await pagePackApi.deleteCard(idCard)
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})

export const updateCard = createAsyncThunk('pagePack/deleteCard', async (dataPackCards: dataUpdateCardType, {
  rejectWithValue,
}) => {
  try {
    await pagePackApi.updateCard(dataPackCards)
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})
