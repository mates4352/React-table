import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {addCard, getPackCards} from "./Page-pack-thunk";
import {cardsType, responseCardType, responsePackCardsType} from "./Page-pack-type";
import {LoadingType} from "../../../../app/App-type";
import {someNamesThunks} from "../../../../utils/helpers/functions/someNamesThunks";
import {authNamesThunks} from "../../../../app/App-thunk";
import {Statuses} from "../../../../utils/enum/statuses";
import {PopupCardType, PopupPackType} from "../../Main-type";
import {PopupCard, PopupPack} from "../../../../utils/enum/popup";

interface PagePackStateType {
  packCards: responsePackCardsType
  cards: Array<cardsType>
  loading: LoadingType | ''
  isPopup: {
    isPopupAddNewCard: boolean
    isPopupEditCard: boolean
    isPopupDeleteCard: boolean
  }
  page: number
  pageCounter: number
  cardsPackId: string
}

export const initialState = {
  packCards: {
    cards: [],
    packUserId: '',
    packName: '',
    packPrivate: false,
    packCreated: '',
    packUpdated: '',
    page: 0,
    pageCount: 0,
    cardsTotalCount: 0,
    minGrade: 0,
    maxGrade: 0,
    token: '',
    tokenDeathTime: 0,
  },
  cards: [],
  isPopup: {
    isPopupAddNewCard: false,
    isPopupEditCard: false,
    isPopupDeleteCard: false,
  },
  cardsPackId: '',
  loading: '',
  page: 1,
  pageCounter: 8
} as PagePackStateType


const pagePackSlice = createSlice({
  name: 'pagePack',
  initialState,
  reducers: {
    setPopup: (state: PagePackStateType, action: PayloadAction<{ popup: PopupCardType, isPopup: boolean}>) => {
      if(action.payload.popup === PopupCard.NewCard) {
        state.isPopup.isPopupAddNewCard = action.payload.isPopup
      } else if(action.payload.popup === PopupCard.EditCard) {
        state.isPopup.isPopupEditCard = action.payload.isPopup
      } else if(action.payload.popup === PopupCard.DeleteCard) {
        state.isPopup.isPopupDeleteCard = action.payload.isPopup
      }
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getPackCards.fulfilled.type, (state: PagePackStateType, action: PayloadAction<responsePackCardsType>) => {
      state.packCards = action.payload
      state.cards = action.payload.cards
    })
    .addCase(addCard.fulfilled.type, (state: PagePackStateType, action: PayloadAction<responseCardType>) => {
      state.cardsPackId = action.payload.newCard.cardsPack_id
    })
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/pending', action.type),(state: PagePackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.PENDING;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/fulfilled', action.type),(state: PagePackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.SUCCEEDED;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/rejected', action.type),(state: PagePackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.FAILED;
      }
    )
  }
})

export const pagePacksReducer = pagePackSlice.reducer
export const {setPopup} = pagePackSlice.actions;
