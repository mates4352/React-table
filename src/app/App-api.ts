import axios from "axios";
import {UserApiType} from "./App-type";

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const AppApi = {
  getMe: async () => {
    return await instance.post<UserApiType>('auth/me');
  }
}
