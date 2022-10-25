import {dataEditProfileType, ForgotApiType} from "../auth/Auth-type";
import {instance} from "../../app/App-api";
import {GetCardsApiType} from "./Main-type";

export const MainApi = {
  getCardsPack: async () => {
    return await  instance.get<GetCardsApiType>('cards/pack', {
      params: {
        min: 0,
        max: 10
      }
    })
  },

  updateProfile: async(dataEditProfile: dataEditProfileType) => {
    return await instance.put<ForgotApiType>('auth/me', dataEditProfile);
  },

  logout: async() => {
    return await instance.delete<ForgotApiType>('auth/me');
  },
}
