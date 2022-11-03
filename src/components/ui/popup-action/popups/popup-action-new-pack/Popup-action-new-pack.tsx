import React, {FC, memo, useCallback} from 'react';
import s from './Popup-action-new-pack.module.scss';
import {PopupAction} from "../../Popup-action";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopup} from "../../../../../features/main/common/packs-list/Packs-list-slice";
import {Field, Form, Formik} from "formik";
import {newPackSchema} from "../../../../../utils/helpers/validate/New-pack-validate";
import {DataNewPackType} from "../../../../../features/main/Main-type";
import {getCardsPack, newPack} from "../../../../../features/main/common/packs-list/Packs-list-thunk";
import {Input} from "../../../../bll/input/Input";
import {Checkbox} from "../../../../bll/checkbox/Checkbox";
import {Button} from "../../../../bll/button/Button";

type PopupActionNewPackType = {};

export const PopupActionNewPack: FC<PopupActionNewPackType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {isPopup, page, pageCount} = useAppSelector(state => state.packsList);
  const onClickPopupNewPack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.NewPack, isPopup: !isPopup.isPopupNewPack}))
  }, [isPopup.isPopupNewPack])

  return (
    <PopupAction
      title={'Add new pack'}
      isPopup={isPopup.isPopupNewPack}
      onClickPopup={onClickPopupNewPack}
    >
      <div className={s.content}>
        <Formik
          initialValues={{
            name: '',
            private: false
          }}
          validationSchema={newPackSchema}
          onSubmit={async(dataNewPack: DataNewPackType) => {
            await dispatch(newPack(dataNewPack))
            dispatch(getCardsPack({page: page, pageCount: pageCount}))
            onClickPopupNewPack()
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
                <Button className={s.button_save} type={'submit'}>Save</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </PopupAction>
  );
})
