import {ForgotApiType} from "../auth/Auth-type";
import {instance} from "../../app/App-api";
import {dataUpdateRatingType} from "./Main-type";
import {getPackCardsType, responsePackCardsType} from "./common/page-pack/Page-pack-type";

export const MainApi = {
  logout: async() => {
    return await instance.delete<ForgotApiType>('auth/me');
  },

  getPackCards: async(dataPacksCards: getPackCardsType) => {
    return await instance.get<responsePackCardsType>('cards/card', {params: {...dataPacksCards}})
  },

  updateRating: async (dataUpdateRating: dataUpdateRatingType) => {
    return await instance.put('cards/grade', dataUpdateRating)
  }
}
