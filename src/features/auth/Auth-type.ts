export type LoginSubmitType = {
  email: string
  password: string
  rememberMe: boolean
}

export type LoginErrorType = {
  error: string
  password: string
  in: string
}

export type RegisterSubmitType = {
  email: string
  password: string
  confirmPassword?: string
}

export type RegisterErrorType = {
  email: string
  error: string
  in: string
}

export type RegisterApiType = {
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  rememberMe: boolean
  updated: string
  verified: boolean
  __v: number
  _id: string
}

export type ForgotPasswordSubmitType = {
  email: string
}