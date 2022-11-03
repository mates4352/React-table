import React, {FC, memo, useCallback} from 'react';
import s from './Popup-action-edit-pack.module.scss';
import {PopupAction} from "../../Popup-action";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {setPopup} from "../../../../../features/main/common/packs-list/Packs-list-slice";
import {editPackSchema} from "../../../../../utils/helpers/validate/Edit-pack-validate";
import {DataEditPackType} from "../../../../../features/main/Main-type";
import {editPack, getCardsPack} from "../../../../../features/main/common/packs-list/Packs-list-thunk";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Checkbox} from "../../../../bll/checkbox/Checkbox";
import {Button} from "../../../../bll/button/Button";

type PopupActionEditPackType = {

};

export const PopupActionEditPack: FC<PopupActionEditPackType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {idPack, isPopup, page, pageCount} = useAppSelector(state => state.packsList)
  const onClickPopupEditPack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.EditPack, isPopup: !isPopup.isPopupEditPack}))
  }, [isPopup.isPopupEditPack])

  return (
    <PopupAction
      title={'Edit pack'}
      isPopup={isPopup.isPopupEditPack}
      onClickPopup={onClickPopupEditPack}
    >
      <Formik
        initialValues={{
          name: '',
          private: false
        }}
        validationSchema={editPackSchema}
        onSubmit={async(dataEditPack: DataEditPackType) => {
          await dispatch(editPack(({...dataEditPack, _id: idPack})))
          dispatch(getCardsPack({page: page, pageCount: pageCount}))
          dispatch(setPopup({popup: PopupPack.EditPack, isPopup: !isPopup.isPopupEditPack}))
        }}
      >
        {formik => (
          <Form className={s.form}>
            <Field
              className={s.input}
              name={'name'}
              type={'text'}
              label={'Name pack'}
              component={Input}/>

            <Field
              className={s.checkbox}
              name={'private'}
              type={'checkbox'}
              label={'Private pack'}
              component={Checkbox}/>

            <div className={s.group}>
              <Button type={'reset'} buttonType={'cansel'}>Cancel</Button>
              <Button className={s.button_edit} type={'submit'}>Save</Button>
            </div>
          </Form>
        )}
      </Formik>
    </PopupAction>
  );
})
