import * as Yup from "yup";

type ErrorsType = {
  email?: string
  password?: string
  confirmPassword?: string
}

export const registerSchema = Yup.object().shape({
  email: Yup.string()
  .max(30, 'Less characters required')
  .email('Invalid email address')
  .required('Required value email'),
  password: Yup.string()
  .min(7, 'Less than 7 characters')
  .max(24, 'No more than 7 characters')
  .required('Required value password'),
  confirmPassword: Yup.string()
  .min(7, 'Less than 7 characters')
  .max(24, 'No more than 7 characters')
  .required('Required value password')
  .oneOf([Yup.ref('password')], 'Confirm password does not match'),
})