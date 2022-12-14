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

export type ForgotApiType = {
  info: string
  error: string;
}

export type ForgotPasswordSubmitType = {
  email: string
}

export type ForgotPasswordType = ForgotPasswordSubmitType & {
  from: string
  message: string
}

export type NewPasswordSubmitType = {
  password: string
}

export type NewPasswordType = NewPasswordSubmitType & {
  resetPasswordToken: string
}

export type dataEditProfileType = {
  email: string
  avatar: string
}