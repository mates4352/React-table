import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getPackCards} from "./Page-pack-thunk";
import {cardsType, responsePackCardsType} from "./Page-pack-type";

interface PagePackStateType {
  packCards: responsePackCardsType
  cards: Array<cardsType>
}

export const initialState = {
  packCards: {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: ''
  },
  cards: []
} as PagePackStateType


const pagePackSlice = createSlice({
  name: 'pagePack',
  initialState,
  reducers: {},

  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getPackCards.fulfilled.type, (state: PagePackStateType, action: PayloadAction<responsePackCardsType>) => {
      state.packCards = action.payload
      state.cards = action.payload.cards
    })
  }
})

export const pagePacksReducer = pagePackSlice.reducer
export const {} = pagePackSlice.actions;
