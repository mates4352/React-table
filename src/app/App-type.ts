export type LoadingType = 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCEEDED';

export type UserApiType = {
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  rememberMe: boolean
  token: string
  tokenDeathTime: number
  updated: string
  verified: boolean
  __v: number
  _id: string
}
