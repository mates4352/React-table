export type LoadingType = 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCEEDED';

export type UserApiType = {
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number | null
  rememberMe: boolean
  token: string
  tokenDeathTime: number | null
  updated: string
  verified: boolean
  __v: number | null
  _id: string
}
