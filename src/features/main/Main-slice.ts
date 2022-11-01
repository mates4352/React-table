import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getCardsPack} from "./Main-thunk";
import {CardPacksType, GetCardsApiType, PopupPackType} from "./Main-type";
import {PopupPack} from "../../utils/enum/popup";
import {LoadingType} from "../../app/App-type";
import {someNamesThunks} from "../../utils/helpers/functions/someNamesThunks";
import {authNamesThunks} from "../../app/App-thunk";
import {Statuses} from "../../utils/enum/statuses";
import {valueTabType} from "../../components/bll/tabs/Tabs";

interface MainStateType {
  packsList: GetCardsApiType
  isPopup: {
    isPopupNewPack: boolean
    isPopupEditPack: boolean
    isPopupDeletePack: boolean
  }
  page: number,
  pageCount: number,
  cardPacks: Array<CardPacksType>
  sortCardPacks: boolean
  idPack: string
  loading: LoadingType | ''
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
  page: 1,
  pageCount: 8,
  cardPacks: [],
  sortCardPacks: false,
  idPack: '',
  loading: ''
} as MainStateType;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPopup: (state: MainStateType, action: PayloadAction<{ popup: PopupPackType, isPopup: boolean }>) => {
      if(action.payload.popup === PopupPack.NewPack) {
        state.isPopup.isPopupNewPack = action.payload.isPopup
      } else if(action.payload.popup === PopupPack.EditPack) {
        state.isPopup.isPopupEditPack = action.payload.isPopup
      } else if(action.payload.popup === PopupPack.DeletePack) {
        state.isPopup.isPopupDeletePack = action.payload.isPopup
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
      if(action.payload !== '') {
        state.cardPacks = state.packsList.cardPacks.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
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
      state.page = action.payload
    },
    setPageCount: (state: MainStateType, action: PayloadAction<number>) => {
      state.pageCount = action.payload
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getCardsPack.fulfilled.type, (state: MainStateType, action: PayloadAction<GetCardsApiType>) => {
      state.packsList = action.payload;
      state.cardPacks = action.payload.cardPacks;
    })
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/pending', action.type), (state: MainStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.PENDING;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/fulfilled', action.type), (state: MainStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.SUCCEEDED;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/rejected', action.type), (state: MainStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.FAILED;
      }
    )
  }
});

export const {reducer} = mainSlice;
export const {setPopup, setIdPack, setPage, setPageCount, filterPack, searchPack, setCardPacks, setSortCardPacks} = mainSlice.actions;
export const mainReducer = reducer;
