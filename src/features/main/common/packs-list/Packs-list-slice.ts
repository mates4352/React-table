import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {valueTabType} from "../../../../components/bll/tabs/Tabs";
import {CardPacksType, GetCardsApiType, PopupPackType} from "../../Main-type";
import {PopupPack} from "../../../../utils/enum/popup";
import {deletePack, getCardsPack} from "./Packs-list-thunk";

interface MainStateType {
  packsList: GetCardsApiType
  isPopupPacks: {
    isPopupNewPack: boolean
    isPopupEditPack: boolean
    isPopupDeletePack: boolean
  }
  PacksPage: number,
  PacksPageCount: number,
  cardPacks: Array<CardPacksType>
  sortCardPacks: boolean
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
  isPopupPacks: {
    isPopupNewPack: false,
    isPopupEditPack: false,
    isPopupDeletePack: false
  },
  PacksPage: 1,
  PacksPageCount: 8,
  cardPacks: [],
  sortCardPacks: false,
  idPack: '',
} as MainStateType;

const packsListSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPopupPack: (state: MainStateType, action: PayloadAction<{ popup: PopupPackType, isPopup: boolean }>) => {
      if(action.payload.popup === PopupPack.NewPack) {
        state.isPopupPacks.isPopupNewPack = action.payload.isPopup
      } else if(action.payload.popup === PopupPack.EditPack) {
        state.isPopupPacks.isPopupEditPack = action.payload.isPopup
      } else if(action.payload.popup === PopupPack.DeletePack) {
        state.isPopupPacks.isPopupDeletePack = action.payload.isPopup
      }
    },
    filterPack: (state: MainStateType, action: PayloadAction<{ type: valueTabType, userId?: string }>) => {
      if(action.payload.type === 'My') {
        state.cardPacks = state.packsList.cardPacks.filter(item => item.user_id === action.payload.userId)
      } else if(action.payload.type === 'All') {
        state.cardPacks = state.packsList.cardPacks
      }
    },
    searchPack: (state: MainStateType, action: PayloadAction<string>) => {
      if(action.payload) {
        const arrayCardPacks = state.packsList.cardPacks.filter(packs => {
          return packs.name.toLowerCase().slice(0, action.payload.length) === action.payload.toLowerCase().trim()
        })
        if(arrayCardPacks.length !== 0) {
          state.cardPacks = arrayCardPacks
        } else {
          state.cardPacks = state.packsList.cardPacks
        }
      } else {
        state.cardPacks = state.packsList.cardPacks
      }
    },
    setCardPacks: (state: MainStateType) => {
      if(state.sortCardPacks) {
        state.cardPacks = state.packsList.cardPacks.sort((a, b) => Date.parse(a.updated) - Date.parse(b.updated))
      } else {
        state.cardPacks = state.packsList.cardPacks.sort((a, b) => Date.parse(b.updated) - Date.parse(a.updated))
      }
    },
    setSortCardPacks: (state: MainStateType, action: PayloadAction<boolean>) => {
      state.sortCardPacks = action.payload
    },
    setIdPack: (state: MainStateType, action: PayloadAction<string>) => {
      state.idPack = action.payload
    },
    setPage: (state: MainStateType, action: PayloadAction<number>) => {
      state.PacksPage = action.payload
    },
    setPageCount: (state: MainStateType, action: PayloadAction<number>) => {
      state.PacksPageCount = action.payload
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getCardsPack.fulfilled.type, (state: MainStateType, action: PayloadAction<GetCardsApiType>) => {
      state.packsList = action.payload;
      state.cardPacks = action.payload.cardPacks;
    })
  }
});

export const {reducer} = packsListSlice;
export const {setPopupPack, setIdPack, setPage, setPageCount, filterPack, searchPack, setCardPacks, setSortCardPacks} = packsListSlice.actions;
export const packsListReducer = reducer;
