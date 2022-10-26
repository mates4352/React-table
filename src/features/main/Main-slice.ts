import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getCardsPack} from "./Main-thunk";
import {GetCardsApiType, PopupPackType} from "./Main-type";
import {PopupPack} from "../../utils/enum/popup";


interface MainStateType {
  packsList: GetCardsApiType
  isPopup: {
    isPopupNewPack: boolean
    isPopupEditPack: boolean
    isPopupDeletePack: boolean
  }
  idPack: string
}

const initialState = {
  packsList: {
    cardPacks: [],
    page: 0,
    pageCount: 0,
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    token: '',
    tokenDeathTime: 0,
  },
  isPopup: {
    isPopupNewPack: false,
    isPopupEditPack: false,
    isPopupDeletePack: false
  },
  idPack: ''
} as MainStateType;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPopup: (state: MainStateType, action: PayloadAction<{popup: PopupPackType, isPopup: boolean}>) => {
      if(action.payload.popup === PopupPack.NewPack) {
        state.isPopup.isPopupNewPack = action.payload.isPopup
      } else if(action.payload.popup === PopupPack.EditPack) {
        state.isPopup.isPopupEditPack = action.payload.isPopup
      } else if(action.payload.popup === PopupPack.DeletePack) {
        state.isPopup.isPopupDeletePack = action.payload.isPopup
      }
    },
    setIdPack: (state: MainStateType, action: PayloadAction<string>) => {
      state.idPack = action.payload
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getCardsPack.fulfilled.type, (state: MainStateType, action: PayloadAction<GetCardsApiType>) => {
      state.packsList = action.payload;
    })
  }
});

export const {reducer} = mainSlice;
export const {setPopup, setIdPack} = mainSlice.actions;
export const mainReducer = reducer;
