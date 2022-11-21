import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../features/auth/Auth-slice";
import {appReducer} from "./App-slice";
import {appLoadState, appSaveState} from "../utils/localStorage/appLocalStorage";
import {mainReducer} from "../features/main/Main-slice";
import {packsListReducer} from "../features/main/common/packs-list/Packs-list-slice";
import {pagePacksReducer} from "../features/main/common/page-pack/Page-pack-slice";
import {pageFriendsPackReducer} from "../features/main/common/page-friends-pack/Page-friends-pack-slice";
import {PageLearnReducer} from "../features/main/common/page-learn/Page-learn-slice";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  main: mainReducer,
  packsList: packsListReducer,
  pagePack: pagePacksReducer,
  pagePackFriends: pageFriendsPackReducer,
  PageLearn: PageLearnReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    app: appLoadState('app'),
  }
});

store.subscribe(() => {
  appSaveState(store.getState().app, 'app')
})

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
