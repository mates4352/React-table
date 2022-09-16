import * as Yup from "yup";

export const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
  .min(8, 'Less than 8 characters')
  .max(24, 'No more than 8 characters')
  .required('Required value password'),
});