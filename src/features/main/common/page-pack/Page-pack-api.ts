import {instance} from "../../../../app/App-api";
import {dataCardType, getPackCardsType, responsePackCardsType} from "./Page-pack-type";

export const pagePackApi = {
  getPackCards: async(dataPacksCards: getPackCardsType) => {
    return await instance.get<responsePackCardsType>('cards/card', {params: {...dataPacksCards}})
  },

  setCard: async(dataCard: dataCardType) => {
    return await instance.post('cards/card', {card: {...dataCard}})
  },

  deleteCard: async(idCard: string) => {
    return await instance.delete('cards/card', {params: {id: idCard}})
  },

  updateCard: async(dataCard: dataCardType) => {
    return await instance.put('cards/card', {...dataCard})
  },
}
