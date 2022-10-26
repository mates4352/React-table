import React, {FC} from 'react';
import s from './Content-new-pack.module.scss';
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../bll/input/Input";
import {Checkbox} from "../../../../bll/checkbox/Checkbox";
import {newPackSchema} from "../../../../../utils/helpers/validate/New-pack-validate";
import {DataNewPackType} from "../../../../../features/main/Main-type";
import {Button} from "../../../../bll/button/Button";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {newPack} from "../../../../../features/main/Main-thunk";

type ContentNewPackType = {
  className?: string
  onClickNewPack?: () => void
};

export const ContentNewPack: FC<ContentNewPackType> = ({
  className,
  onClickNewPack
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={s.content}>
      <Formik
        initialValues={{
          name: '',
          private: false
        }}
        validationSchema={newPackSchema}
        onSubmit={async(dataNewPack: DataNewPackType) => {
         await dispatch(newPack(dataNewPack))
          onClickNewPack && onClickNewPack()
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
  );
};
