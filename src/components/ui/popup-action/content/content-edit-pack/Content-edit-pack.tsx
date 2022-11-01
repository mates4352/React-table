import React, {FC, memo} from 'react';
import s from './Content-edit-pack.module.scss';
import {DataEditPackType} from "../../../../../features/main/Main-type";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Checkbox} from "../../../../bll/checkbox/Checkbox";
import {Button} from "../../../../bll/button/Button";
import {editPackSchema} from "../../../../../utils/helpers/validate/Edit-pack-validate";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {PopupPack} from "../../../../../utils/enum/popup";
import {setPopup} from "../../../../../features/main/common/packs-list/Packs-list-slice";
import {editPack, getCardsPack} from "../../../../../features/main/common/packs-list/Packs-list-thunk";

type ContentEditPackType = {

};

export const ContentEditPack: FC<ContentEditPackType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {idPack, isPopup, page, pageCount} = useAppSelector(state => state.packsList)
  return (
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
  );
})
