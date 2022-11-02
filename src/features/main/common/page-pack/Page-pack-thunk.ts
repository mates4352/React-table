import {createAsyncThunk} from "@reduxjs/toolkit";
import {pagePackApi} from "./Page-pack-api";
import {AxiosError} from "axios";

export const getPackCards = createAsyncThunk('page-pack/getPackCards', async (idPack: string, {
  rejectWithValue
}) => {
  try {
    const response = await pagePackApi.getPackCards({cardsPack_id: idPack})
    return response.data
  } catch(e) {
    const error = e as AxiosError<any>;
    return rejectWithValue(error.response?.data.error);
  }
})
