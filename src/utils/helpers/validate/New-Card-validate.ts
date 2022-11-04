import * as Yup from 'yup';

export const newCardSchema = Yup.object().shape({
  answer: Yup.string()
  .required('Required value name'),
  question: Yup.string()
  .required('Required value name'),
});
