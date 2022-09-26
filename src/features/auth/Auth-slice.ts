import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoadingType} from "../../app/App-type";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit/src/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/src/tsHelpers";
import {authNamesThunks} from "./Auth-thunk";
import {Statuses} from "../../utils/enum/statuses";
import {someNamesThunks} from "../../utils/helpers/functions/someNamesThunks";

interface AuthStateType {
  error: string
  loading: LoadingType | ''
}

const initialState = {
  error: '',
  loading: ''
} as AuthStateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sendError: (state: AuthStateType) => {
      if(state.error) state.error = '';
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<any>>) => {
    builder
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/pending', action.type),(state: AuthStateType, action: PayloadAction<string>) => {
      state.loading = Statuses.PENDING;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/fulfilled', action.type),(state: AuthStateType, action: PayloadAction<string>) => {
      if(state.error) state.error = '';
      state.loading = Statuses.SUCCEEDED;
      }
    )
    .addMatcher((action: AnyAction) => someNamesThunks(authNamesThunks, '/rejected', action.type),(state: AuthStateType, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = Statuses.FAILED;
      }
    )
  }
});

export const {reducer} = authSlice;
export const {sendError} = authSlice.actions;
export const authReducer = reducer;