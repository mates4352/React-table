import * as Yup from "yup";

export const editProfileSchema = Yup.object().shape({
  name: Yup.string()
  .max(30, 'Less characters required')
  .required('Required value name'),
});