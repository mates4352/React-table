import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getPackCards} from "./Page-pack-thunk";
import {cardsType, responsePackCardsType} from "./Page-pack-type";
import {LoadingType} from "../../../../app/App-type";
import {someNamesThunks} from "../../../../utils/helpers/functions/someNamesThunks";
import {authNamesThunks} from "../../../../app/App-thunk";
import {Statuses} from "../../../../utils/enum/statuses";

interface PagePackStateType {
  packCards: responsePackCardsType
  cards: Array<cardsType>
  loading: LoadingType | ''
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
  loading: ''
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
export const {} = pagePackSlice.actions;
