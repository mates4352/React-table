import {CardsPackOptionType, DataEditPackType, DataNewPackType, GetCardsApiType} from "../../Main-type";
import {instance} from "../../../../app/App-api";
import {dataEditProfileType, ForgotApiType} from "../../../auth/Auth-type";

export const PacksListApi = {
  getCardsPack: async(option: CardsPackOptionType) => {
    return await instance.get<GetCardsApiType>('cards/pack', {params: {...option}})
  },

  newPack: async(dataNewPack: DataNewPackType) => {
    return await instance.post('cards/pack', {cardsPack: {...dataNewPack}})
  },

  updatePack: async(dataEditPack: DataEditPackType & { _id: string }) => {
    return await instance.put('cards/pack', {cardsPack: {...dataEditPack}})
  },

  deletePack: async(idPack: string) => {
    return await instance.delete<any>(`/cards/pack?id=${idPack}`)
  },

  updateProfile: async(dataEditProfile: dataEditProfileType) => {
    return await instance.put<ForgotApiType>('auth/me', dataEditProfile);
  },
}
