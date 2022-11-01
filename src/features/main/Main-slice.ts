import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {LoadingType} from "../../app/App-type";
import {someNamesThunks} from "../../utils/helpers/functions/someNamesThunks";
import {authNamesThunks} from "../../app/App-thunk";
import {Statuses} from "../../utils/enum/statuses";

interface MainStateType {
  loading: LoadingType | ''
}

const initialState = {
  loading: ''
} as MainStateType;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {

  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder
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
export const {} = mainSlice.actions;
export const mainReducer = reducer;
