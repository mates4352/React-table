import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {getCardsPack} from "./Main-thunk";
import {CardPacksType, GetCardsApiType} from "./Main-type";


interface MainStateType {
  packsList: GetCardsApiType
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
  }
} as MainStateType;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder.addCase(getCardsPack.fulfilled.type, (state: MainStateType, action: PayloadAction<GetCardsApiType>) => {
      state.packsList = action.payload;
    })
  }
});

export const {reducer} = mainSlice;
export const mainReducer = reducer;
