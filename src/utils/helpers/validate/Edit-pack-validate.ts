import * as Yup from 'yup';

export const editPackSchema = Yup.object().shape({
  name: Yup.string()
  .max(10, 'Less characters required')
  .required('Required value name'),
});
