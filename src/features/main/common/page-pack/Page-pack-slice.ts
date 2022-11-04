import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {deleteCard, getPackCards} from "./Page-pack-thunk";
import {cardsType, responsePackCardsType} from "./Page-pack-type";
import {LoadingType} from "../../../../app/App-type";
import {someNamesThunks} from "../../../../utils/helpers/functions/someNamesThunks";
import {authNamesThunks} from "../../../../app/App-thunk";
import {Statuses} from "../../../../utils/enum/statuses";
import {PopupCardType} from "../../Main-type";
import {PopupCard} from "../../../../utils/enum/popup";

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
  pageCount: number
  idCard: string
  isSortCards: boolean
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
  loading: '',
  page: 1,
  pageCount: 8,
  idCard: '',
  isSortCards: false,
} as PagePackStateType


const pagePackSlice = createSlice({
  name: 'pagePack',
  initialState,
  reducers: {
    setPopup: (state: PagePackStateType, action: PayloadAction<{ popup: PopupCardType, isPopup: boolean }>) => {
      if(action.payload.popup === PopupCard.NewCard) {
        state.isPopup.isPopupAddNewCard = action.payload.isPopup
      } else if(action.payload.popup === PopupCard.EditCard) {
        state.isPopup.isPopupEditCard = action.payload.isPopup
      } else if(action.payload.popup === PopupCard.DeleteCard) {
        state.isPopup.isPopupDeleteCard = action.payload.isPopup
      }
    },

    setPageCards: (state: PagePackStateType, action: PayloadAction<number>) => {
      state.page = action.payload
    },

    setPageCountCards: (state: PagePackStateType, action: PayloadAction<number>) => {
      state.pageCount = action.payload
    },

    addIdCard: (state: PagePackStateType, action: PayloadAction<string>) => {
      state.idCard = action.payload
    },

    searchCard: (state: PagePackStateType, action: PayloadAction<string>) => {
      if(action.payload) {
        const arrayCards = state.packCards.cards.filter(card => {
          const answer = card.answer.toLowerCase().slice(0, action.payload.length) === action.payload.toLowerCase().trim()
          const question = card.question.toLowerCase().slice(0, action.payload.length) === action.payload.toLowerCase().trim()
          return answer || question
        })
        if(arrayCards.length !== 0) {
          state.cards = arrayCards
        } else {
          state.cards = state.packCards.cards
        }
      } else {
        state.cards = state.packCards.cards
      }
    },
    sortCards: (state: PagePackStateType) => {
      if(state.isSortCards) {
        state.cards = state.packCards.cards.sort((a, b) => Date.parse(a.updated) - Date.parse(b.updated))
      } else {
        state.cards = state.packCards.cards.sort((a, b) => Date.parse(b.updated) - Date.parse(a.updated))
      }
    },
    changeIsSortCards: (state: PagePackStateType, action: PayloadAction<boolean>) => {
      state.isSortCards = action.payload
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getPackCards.fulfilled.type, (state: PagePackStateType, action: PayloadAction<responsePackCardsType>) => {
      state.packCards = action.payload
      state.cards = action.payload.cards
    })
    .addCase(deleteCard.fulfilled.type, (state: PagePackStateType) => {
      state.idCard = ''
    })
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/pending', action.type), (state: PagePackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.PENDING;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/fulfilled', action.type), (state: PagePackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.SUCCEEDED;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/rejected', action.type), (state: PagePackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.FAILED;
      }
    )
  }
})

export const pagePacksReducer = pagePackSlice.reducer
export const {setPopup, setPageCards, setPageCountCards, searchCard, addIdCard, sortCards, changeIsSortCards} = pagePackSlice.actions;
