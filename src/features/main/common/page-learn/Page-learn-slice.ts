import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cardType, responsePackCardsType} from "../page-pack/Page-pack-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getPackLearnCards} from "./Page-learn-thunk";

interface PageLearnSliceStateType {
  packCards: responsePackCardsType
  cards: Array<cardType>
}

const initialState: PageLearnSliceStateType = {
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
  cards: []
}

const PageLearnSlice = createSlice({
  name: 'PageLearn',
  initialState,
  reducers: {
    fitlerCards: (state: PageLearnSliceStateType, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(item => item._id !== action.payload)
      .sort((a, b) => a.grade - b.grade)
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getPackLearnCards.fulfilled.type, (state: PageLearnSliceStateType, action: PayloadAction<responsePackCardsType>) => {
      state.packCards = action.payload
      state.cards = action.payload.cards.sort((a, b) => a.grade - b.grade)
    })
  }
})

export const PageLearnReducer = PageLearnSlice.reducer
export const {fitlerCards} = PageLearnSlice.actions
