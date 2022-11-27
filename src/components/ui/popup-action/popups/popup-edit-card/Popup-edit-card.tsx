import React, {FC, memo, useCallback, useState} from 'react';
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
import {SelectCustom} from "../../../../bll/selectCustom/SelectCustom";
import {InputImage} from "../../../../bll/input-image/InputImage";

type PopupNewCardType = {};
export const PopupEditCard: FC<PopupNewCardType> = memo(({}) => {
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()
  const {isPopup, loading, page, pageCount, idCard} = useAppSelector(state => state.pagePack)
  const [arrayOptions, setArrayOptions] = useState<Array<string>>(['Text', 'Picture'])
  const [imageQuestion, setQuestionImage] = useState('');
  const [imageAnswer, setAnswerImage] = useState('');
  const onClosePopup = useCallback(() => {
    dispatch(setPopup({popup: PopupCard.EditCard, isPopup: false}))
  }, [])

  return (
    <PopupAction title={'Edit card'} isPopup={isPopup.isPopupEditCard} onClickPopup={onClosePopup}>
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
          validationSchema={editCardSchema}
          onSubmit={async(dataEditCard: dataUpdateCard) => {
            if(params.id) {
              await dispatch(updateCard({...dataEditCard, _id: idCard}))
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
                      type={'submit'}>Edit card</Button>
            </Form>
          )}
        </Formik>
      </div>
    </PopupAction>
  );
})
