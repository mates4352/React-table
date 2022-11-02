import * as Yup from 'yup';

export const newCardSchema = Yup.object().shape({
  cardAnswer: Yup.string()
  .required('Required value name'),
  cardQuestion: Yup.string()
  .required('Required value name'),
});
