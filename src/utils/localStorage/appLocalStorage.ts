import {AppStateType} from "../../app/App-slice";

export const appLoadState = (nameItem: string) => {
  try {
    const serializedState = localStorage.getItem(nameItem);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const appSaveState = (appState: AppStateType, nameItem: string) => {
  try {
    const serializedState = JSON.stringify(appState);
    localStorage.setItem(nameItem, serializedState);
  } catch {
    return undefined;
  }
};