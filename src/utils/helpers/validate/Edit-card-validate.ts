import * as Yup from 'yup';

export const editCardSchema = Yup.object().shape({
  answer: Yup.string()
  .required('Required value answer'),
  question: Yup.string()
  .required('Required value question'),
});
