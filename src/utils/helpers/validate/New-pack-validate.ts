import * as Yup from 'yup';

export const newPackSchema = Yup.object().shape({
  name: Yup.string()
  .required('Required value name'),
});
