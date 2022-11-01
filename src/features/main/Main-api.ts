import {ForgotApiType} from "../auth/Auth-type";
import {instance} from "../../app/App-api";

export const MainApi = {
  logout: async() => {
    return await instance.delete<ForgotApiType>('auth/me');
  },
}
