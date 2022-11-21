import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppApi} from "./App-api";
import {AxiosError} from "axios";
import {LoginErrorType} from "../features/auth/Auth-type";
import {register, restorePassword, setLogin, setNewPassword} from "../features/auth/Auth-thunk";
import {logout, updateRating} from "../features/main/Main-thunk";
import {
  deletePack,
  editPack,
  editProfile,
  getCardsPack,
  newPack
} from "../features/main/common/packs-list/Packs-list-thunk";
import {addCard, getPackMyCards} from "../features/main/common/page-pack/Page-pack-thunk";
import {getPackLearnCards} from "../features/main/common/page-learn/Page-learn-thunk";

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
  getPackMyCards.typePrefix,
  addCard.typePrefix,
  getPackLearnCards.typePrefix,
  updateRating.typePrefix,
]
