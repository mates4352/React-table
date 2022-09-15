import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
  .max(30, 'Less characters required')
  .email('Invalid email address')
  .required('Required value email'),
  password: Yup.string()
  .min(7, 'Less than 7 characters')
  .max(24, 'No more than 7 characters')
  .required('Required value password'),
});