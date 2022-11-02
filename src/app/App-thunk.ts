import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppApi} from "./App-api";
import {AxiosError} from "axios";
import {LoginErrorType} from "../features/auth/Auth-type";
import {register, restorePassword, setLogin, setNewPassword} from "../features/auth/Auth-thunk";
import {logout} from "../features/main/Main-thunk";
import {
  deletePack,
  editPack,
  editProfile,
  getCardsPack,
  newPack
} from "../features/main/common/packs-list/Packs-list-thunk";
import {addCard, getPackCards} from "../features/main/common/page-pack/Page-pack-thunk";

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

export const authNamesThunks = [
  setLogin.typePrefix,
  register.typePrefix,
  restorePassword.typePrefix,
  setNewPassword.typePrefix,
  editProfile.typePrefix,
  logout.typePrefix,
  getCardsPack.typePrefix,
  newPack.typePrefix,
  editPack.typePrefix,
  deletePack.typePrefix,
  editProfile.typePrefix,
  logout.typePrefix,
  getPackCards.typePrefix,
  addCard.typePrefix,
]
