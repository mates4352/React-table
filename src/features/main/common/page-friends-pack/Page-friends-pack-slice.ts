import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {LoadingType} from "../../../../app/App-type";
import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {someNamesThunks} from "../../../../utils/helpers/functions/someNamesThunks";
import {Statuses} from "../../../../utils/enum/statuses";
import {authNamesThunks} from "../../../../app/App-thunk";
import {cardType, responsePackCardsType} from "../page-pack/Page-pack-type";
import {getPackFriendsCards} from "./Page-friends-pack-thunk";


interface PageFriendsPackStateType {
  packCards: responsePackCardsType
  cards: Array<cardType>
  loading: LoadingType | ''
  page: number
  pageCount: number
  isSortCards: boolean
}

const initialState = {
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
  loading: '',
  page: 1,
  pageCount: 8,
  isSortCards: false,
} as PageFriendsPackStateType;

const pageFriendsPackSlice = createSlice({
  name: 'pageFriendsPack',
  initialState,
  reducers: {
    setPageCards: (state: PageFriendsPackStateType, action: PayloadAction<number>) => {
      state.page = action.payload
    },

    setPageCountCards: (state: PageFriendsPackStateType, action: PayloadAction<number>) => {
      state.pageCount = action.payload
    },
    sortCards: (state: PageFriendsPackStateType) => {
      if(state.isSortCards) {
        state.cards = state.packCards.cards.sort((a, b) => Date.parse(a.updated) - Date.parse(b.updated))
      } else {
        state.cards = state.packCards.cards.sort((a, b) => Date.parse(b.updated) - Date.parse(a.updated))
      }
    },
    changeIsSortCards: (state: PageFriendsPackStateType, action: PayloadAction<boolean>) => {
      state.isSortCards = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder
    .addCase(getPackFriendsCards.fulfilled.type, (state: PageFriendsPackStateType, action: PayloadAction<responsePackCardsType>) => {
      state.packCards = action.payload
      state.cards = action.payload.cards
    })
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/pending', action.type), (state: PageFriendsPackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.PENDING;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/fulfilled', action.type), (state: PageFriendsPackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.SUCCEEDED;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/rejected', action.type), (state: PageFriendsPackStateType, action: PayloadAction<string>) => {
        state.loading = Statuses.FAILED;
      }
    )
  }
});

export const pageFriendsPackReducer = pageFriendsPackSlice.reducer;
export const {sortCards, changeIsSortCards, setPageCards, setPageCountCards} = pageFriendsPackSlice.actions;
