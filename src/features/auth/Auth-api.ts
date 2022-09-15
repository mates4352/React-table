import {instance} from "../../app/App-api";
import {LoginApiType, LoginSubmitType, RegisterApiType, RegisterSubmitType} from "./Auth-type";

export const AuthApi = {
  login: async(dataLogin: LoginSubmitType) => {
      return await instance.post<LoginApiType>('auth/login', dataLogin);
  },

  register: async(dataRegister: RegisterSubmitType) => {
    return await instance.post<RegisterApiType>('auth/register', dataRegister);
  },
}