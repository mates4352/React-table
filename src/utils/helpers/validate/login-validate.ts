import * as Yup from 'yup';

type ErrorsType = {
  email?: string
  password?: string
}

export const loginSchema = Yup.object().shape({
  email: Yup.string()
  .max(30, 'Less characters required')
  .email('Invalid email address')
  .required('Required value email'),
  password: Yup.string()
  .min(6, 'Less than 6 characters')
  .max(24, 'No more than 6 characters')
  .required('Required value password'),
});