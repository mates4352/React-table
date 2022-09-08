import * as Yup from "yup";

type ErrorsType = {
  email?: string
}

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
  .max(30, 'Less characters required')
  .email('Invalid email address')
  .required('Required value email'),
});