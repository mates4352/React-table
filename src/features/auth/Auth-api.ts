import {instance} from "../../app/App-api";
import {
  ForgotApiType,
  ForgotPasswordType,
  LoginSubmitType,
  RegisterApiType,
  RegisterSubmitType
} from "./Auth-type";
import {UserApiType} from "../../app/App-type";

export const AuthApi = {
  login: async(dataLogin: LoginSubmitType) => {
      return await instance.post<UserApiType>('auth/login', dataLogin);
  },

  register: async(dataRegister: RegisterSubmitType) => {
    return await instance.post<RegisterApiType>('auth/register', dataRegister);
  },

  restorePassword: async(dataForgot: ForgotPasswordType) => {
    return await instance.post<ForgotApiType>('auth/forgot', dataForgot);
  },
}