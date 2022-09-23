import {instance} from "../../app/App-api";
import {
  dataEditProfileType,
  ForgotApiType,
  ForgotPasswordType,
  LoginSubmitType, NewPasswordType,
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

  setNewPassword: async(dataNewPassword: NewPasswordType) => {
    return await instance.post<ForgotApiType>('auth/set-new-password', dataNewPassword);
  },

  updateProfile: async(dataEditProfile: dataEditProfileType) => {
    return await instance.put<ForgotApiType>('auth/me', dataEditProfile);
  },
}