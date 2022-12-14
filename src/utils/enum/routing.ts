export enum Routing {
  AUTH = 'Auth/*',
  REGISTER = 'Register',
  FORGOT_PASSWORD = 'Forgot-Password',
  NEW_PASSWORD = 'New-password',
  CHECK_EMAIL = 'Check-email',

  MAIN = 'Main/*',
  EDIT_PROFILE = 'Edit-profile',
  PAGE_PACK = 'Page-pack',
  PAGE_FRIENDS_PACK = 'Page-friends-pack',
  PAGE_LEARN = 'Page-learn'
}

export enum Link {
  AUTH = '/Auth',
  REGISTER = '/Auth/Register',
  FORGOT_PASSWORD = '/Auth/Forgot-Password',
  NEW_PASSWORD = '/Auth/New-password',
  CHECK_EMAIL = '/Auth/Check-email',

  MAIN = '/Main',
  EDIT_PROFILE = '/Main/Edit-profile',
  PAGE_PACK = '/Main/Page-pack',
  PAGE_FRIENDS_PACK = '/Main/Page-friends-pack',
  PAGE_LEARN = '/Main/Page-learn'
}
