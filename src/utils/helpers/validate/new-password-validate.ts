import * as Yup from "yup";

export const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
  .min(7, 'Less than 7 characters')
  .max(24, 'No more than 7 characters')
  .required('Required value password'),
});