import React, {FC, memo, useCallback, useState, MouseEvent} from 'react';
import s from './Popup-new-card.module.scss'
import {PopupAction} from "../../Popup-action";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopup} from "../../../../../features/main/common/page-pack/Page-pack-slice";
import {PopupCard} from "../../../../../utils/enum/popup";
import {newCardSchema} from "../../../../../utils/helpers/validate/New-Card-validate";
import {addCard, getPackMyCards} from "../../../../../features/main/common/page-pack/Page-pack-thunk";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Button} from "../../../../bll/button/Button";
import {Statuses} from "../../../../../utils/enum/statuses";
import {dataNewCard} from "../../../../../features/main/common/page-pack/Page-pack-type";
import {useParams} from "react-router-dom";
import {SelectCustom} from "../../../../bll/selectCustom/SelectCustom";
import {InputImage} from "../../../../bll/input-image/InputImage";

type PopupNewCardType = {};
export const PopupNewCard: FC<PopupNewCardType> = memo(({}) => {
  const [arrayOptions, setArrayOptions] = useState<Array<string>>(['Text', 'Picture'])
  const [imageQuestion, setQuestionImage] = useState('');
  const [imageAnswer, setAnswerImage] = useState('');
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()
  const {isPopup, loading, page, pageCount} = useAppSelector(state => state.pagePack)
  const onClosePopup = useCallback(() => {
    dispatch(setPopup({popup: PopupCard.NewCard, isPopup: false}))
  }, [])

  return (
    <PopupAction title={'Add new card'} isPopup={isPopup.isPopupAddNewCard} onClickPopup={onClosePopup}>
      <div className={s.body}>
        <SelectCustom
          title={'Choose a question format'}
          options={arrayOptions}
          setArrayOptions={setArrayOptions}
        />

        <Formik
          initialValues={{
            question: '',
            answer: '',
          }}
          validationSchema={newCardSchema}
          onSubmit={async(dataNewCard: dataNewCard) => {
            if(params.id) {
              await dispatch(addCard({...dataNewCard, cardsPack_id: params.id}))
              dispatch(getPackMyCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
              onClosePopup()
              setQuestionImage('')
              setAnswerImage('')
            }
          }}
        >
          {formik => (
            <Form className={s.form}>
              {arrayOptions[0] === 'Text' ?
                <>
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
                </>
                :
                <div className={s.wrap}>
                  <Field
                    className={s.input}
                    name={'question'}
                    type={'file'}
                    label={'Question'}
                    setImage={setQuestionImage}
                    component={InputImage}/>

                  {imageQuestion && <img className={s.image} src={imageQuestion} alt=""/>}

                  <Field
                    className={s.input}
                    name={'answer'}
                    type={'file'}
                    label={'Answer'}
                    setImage={setAnswerImage}
                    component={InputImage}/>

                  {imageAnswer && <img className={s.image} src={imageAnswer} alt=""/>}
                </div>
              }
              <Button className={s.button} disabled={!(formik.isValid && formik.dirty) || loading === Statuses.PENDING}
                      type={'submit'}>Add new card</Button>
            </Form>
          )}
        </Formik>
      </div>
    </PopupAction>
  );
})
