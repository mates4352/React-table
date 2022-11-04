import {instance} from "../../../../app/App-api";
import {
  dataCardType, dataUpdateCardType,
  getPackCardsType,
  responseCardType,
  responsePackCardsType
} from "./Page-pack-type";

export const pagePackApi = {
  getPackCards: async(dataPacksCards: getPackCardsType) => {
    return await instance.get<responsePackCardsType>('cards/card', {params: {...dataPacksCards}})
  },

  setCard: async(dataCard: dataCardType) => {
    return await instance.post<responseCardType>('cards/card', {card: {...dataCard}})
  },

  deleteCard: async(idCard: string) => {
    return await instance.delete('cards/card', {params: {id: idCard}})
  },

  updateCard: async(dataCard: dataUpdateCardType) => {
    return await instance.put('cards/card', {card: {...dataCard}})
  },
}
