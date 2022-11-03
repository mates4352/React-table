import React, {FC, memo, useCallback} from 'react';
import s from './Popup-new-card.module.scss'
import {PopupAction} from "../../Popup-action";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopup} from "../../../../../features/main/common/page-pack/Page-pack-slice";
import {PopupCard} from "../../../../../utils/enum/popup";
import {newCardSchema} from "../../../../../utils/helpers/validate/New-Card-validate";
import {addCard, getPackCards} from "../../../../../features/main/common/page-pack/Page-pack-thunk";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Button} from "../../../../bll/button/Button";
import {Statuses} from "../../../../../utils/enum/statuses";
import {dataNewCard} from "../../../../../features/main/common/page-pack/Page-pack-type";
import {useParams} from "react-router-dom";

type PopupNewCardType = {

};
export const PopupNewCard: FC<PopupNewCardType> = memo(({}) => {
  const dispatch = useAppDispatch()
  const params = useParams<{id: string}>()
  const {isPopup, loading, page, pageCount} = useAppSelector(state => state.pagePack)
  const onClosePopup = useCallback( () => {
    dispatch(setPopup({popup: PopupCard.NewCard, isPopup: false}))
  }, [])

  return (
    <PopupAction title={'Add new card'} isPopup={isPopup.isPopupAddNewCard} onClickPopup={onClosePopup}>
      <Formik
        initialValues={{
          cardQuestion: '',
          cardAnswer: '',
        }}
        validationSchema={newCardSchema}
        onSubmit={async(dataNewCard: dataNewCard) => {
          if(params.id) {
            await dispatch(addCard({...dataNewCard, cardsPack_id: params.id}))
            dispatch(getPackCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
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
    </PopupAction>
  );
})
