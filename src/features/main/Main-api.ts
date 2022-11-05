import {ForgotApiType} from "../auth/Auth-type";
import {instance} from "../../app/App-api";
import {dataUpdateRatingType} from "./Main-type";

export const MainApi = {
  logout: async() => {
    return await instance.delete<ForgotApiType>('auth/me');
  },

  updateRating: async (dataUpdateRating: dataUpdateRatingType) => {
    return await instance.put('cards/grade', dataUpdateRating)
  }
}
