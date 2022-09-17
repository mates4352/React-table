import axios from "axios";
import {UserApiType} from "./App-type";

export const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
})

export const AppApi = {
  getMe: async () => {
    return await instance.post<UserApiType>('auth/me');
  }
}