import * as Yup from "yup";

type ErrorsType = {
    password?: string
}

export const newPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Less than 6 characters')
      .max(24, 'No more than 6 characters')
      .required('Required value password'),
});