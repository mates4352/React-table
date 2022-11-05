import React, {FC, memo, useCallback} from 'react';
import s from './Popup-edit-card.module.scss';
import {PopupAction} from "../../Popup-action";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopup} from "../../../../../features/main/common/page-pack/Page-pack-slice";
import {PopupCard} from "../../../../../utils/enum/popup";
import {getPackMyCards, updateCard} from "../../../../../features/main/common/page-pack/Page-pack-thunk";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Button} from "../../../../bll/button/Button";
import {Statuses} from "../../../../../utils/enum/statuses";
import {dataUpdateCard} from "../../../../../features/main/common/page-pack/Page-pack-type";
import {useParams} from "react-router-dom";
import {editCardSchema} from "../../../../../utils/helpers/validate/Edit-card-validate";

type PopupNewCardType = {

};
export const PopupEditCard: FC<PopupNewCardType> = memo(({}) => {
  const dispatch = useAppDispatch()
  const params = useParams<{id: string}>()
  const {isPopup, loading, page, pageCount, idCard} = useAppSelector(state => state.pagePack)
  const onClosePopup = useCallback( () => {
    dispatch(setPopup({popup: PopupCard.EditCard, isPopup: false}))
  }, [])

  return (
    <PopupAction title={'Edit card'} isPopup={isPopup.isPopupEditCard} onClickPopup={onClosePopup}>
      <Formik
        initialValues={{
          question: '',
          answer: '',
        }}
        validationSchema={editCardSchema}
        onSubmit={async(dataEditCard: dataUpdateCard) => {
          if(params.id) {
            await dispatch(updateCard({...dataEditCard, _id: idCard}))
            dispatch(getPackMyCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
            onClosePopup()
          }
        }}
      >
        {formik => (
          <Form className={s.form}>
            <Field
              className={s.input}
              name={'question'}
              type={'text'}
              label={'Question'}
              component={Input}/>

            <Field
              className={s.input}
              name={'answer'}
              type={'text'}
              label={'Answer'}
              component={Input}/>

            <Button className={s.button} disabled={!(formik.isValid && formik.dirty) || loading === Statuses.PENDING} type={'submit'}>Edit card</Button>
          </Form>
        )}
      </Formik>
    </PopupAction>
  );
})
