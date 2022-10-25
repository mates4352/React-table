import {dataEditProfileType, ForgotApiType} from "../auth/Auth-type";
import {instance} from "../../app/App-api";
import {DataNewPackType, GetCardsApiType} from "./Main-type";

export const MainApi = {
  getCardsPack: async () => {
    return await  instance.get<GetCardsApiType>('cards/pack', {
      params: {
        min: 0,
        max: 2
      }
    })
  },

  newPack: async (dataNewPack: DataNewPackType) => {
    return await instance.post('cards/pack', {cardsPack: {...dataNewPack}})
  },

  updateProfile: async(dataEditProfile: dataEditProfileType) => {
    return await instance.put<ForgotApiType>('auth/me', dataEditProfile);
  },

  logout: async() => {
    return await instance.delete<ForgotApiType>('auth/me');
  },
}
