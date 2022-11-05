import {instance} from "../../../../app/App-api";
import {
  dataCardType, dataUpdateCardType,
  responseCardType,
} from "./Page-pack-type";

export const pagePackApi = {
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
