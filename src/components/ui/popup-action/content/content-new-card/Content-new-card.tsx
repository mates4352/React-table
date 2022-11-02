import React, {FC} from 'react';
import s from './Content-new-card.module.scss';
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Button} from "../../../../bll/button/Button";
import {newCardSchema} from "../../../../../utils/helpers/validate/New-Card-validate";
import {dataNewCard} from "../../../../../features/main/common/page-pack/Page-pack-type";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {Statuses} from "../../../../../utils/enum/statuses";
import {addCard} from "../../../../../features/main/common/page-pack/Page-pack-thunk";
import {useParams} from "react-router-dom";

type ContentNewCardType = {
  onClosePopup: () => void
};

export const ContentNewCard: FC<ContentNewCardType> = ({
  onClosePopup
}) => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.pagePack)
  const params = useParams<{id: string}>()
  return (
    <Formik
      initialValues={{
        cardQuestion: '',
        cardAnswer: '',
      }}
      validationSchema={newCardSchema}
      onSubmit={async(dataNewCard: dataNewCard) => {
        if(params.id) {
          await dispatch(addCard({...dataNewCard, cardsPack_id: params.id}))
          onClosePopup()
        }
      }}
    >
      {formik => (
        <Form className={s.form}>
          <Field
            className={s.input}
            name={'cardQuestion'}
            type={'text'}
            label={'Question'}
            component={Input}/>

          <Field
            className={s.input}
            name={'cardAnswer'}
            type={'text'}
            label={'Answer'}
            component={Input}/>

          <Button className={s.button} disabled={!(formik.isValid && formik.dirty) || loading === Statuses.PENDING} type={'submit'}>Add new card</Button>
        </Form>
      )}
    </Formik>
  );
};
