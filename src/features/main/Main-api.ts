import {dataEditProfileType, ForgotApiType} from "../auth/Auth-type";
import {instance} from "../../app/App-api";

export const MainApi = {
  updateProfile: async(dataEditProfile: dataEditProfileType) => {
    return await instance.put<ForgotApiType>('auth/me', dataEditProfile);
  },

  logout: async() => {
    return await instance.delete<ForgotApiType>('auth/me');
  },
}