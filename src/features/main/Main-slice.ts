import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getCardsPack} from "./Main-thunk";
import {GetCardsApiType, PopupPackType} from "./Main-type";
import {PopupPack} from "../../utils/enum/popup";
import {LoadingType} from "../../app/App-type";
import {someNamesThunks} from "../../utils/helpers/functions/someNamesThunks";
import {authNamesThunks} from "../../app/App-thunk";
import {Statuses} from "../../utils/enum/statuses";


interface MainStateType {
  packsList: GetCardsApiType
  isPopup: {
    isPopupNewPack: boolean
    isPopupEditPack: boolean
    isPopupDeletePack: boolean
  }
  page: number,
  pageCount: number,
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
  idPack: '',
  loading: ''
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
    },
    setPage: (state: MainStateType, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getCardsPack.fulfilled.type, (state: MainStateType, action: PayloadAction<GetCardsApiType>) => {
      state.packsList = action.payload;
    })
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/pending', action.type),(state: MainStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.PENDING;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/fulfilled', action.type),(state: MainStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.SUCCEEDED;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/rejected', action.type),(state: MainStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.FAILED;
      }
    )
  }
});

export const {reducer} = mainSlice;
export const {setPopup, setIdPack, setPage} = mainSlice.actions;
export const mainReducer = reducer;
