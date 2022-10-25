import * as Yup from 'yup';

export const newPackSchema = Yup.object().shape({
  name: Yup.string()
  .max(10, 'Less characters required')
  .required('Required value name'),
});
