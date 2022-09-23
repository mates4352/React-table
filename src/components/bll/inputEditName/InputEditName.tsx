import React, {FC, useCallback, useEffect, useState} from 'react';
import s from './InputEditName.module.scss';
import {Input} from "../input/Input";
import {FieldInputProps} from "formik";
import classNames from "classnames/bind";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {appSelect} from "../../../app/App-select";
import {editProfile} from "../../../features/auth/Auth-thunk";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {IconEdit} from "../../icons/icon-edit/Icon-edit";

type InputEditNameType = {
  field: FieldInputProps<any>,
  form: any
  label: string
  type: string
  errorResponse?: boolean
  className?: string // кастомные стили для компоненты через css var().
};

export const InputEditName: FC<InputEditNameType> = ({
  form,
  field,
  className,
  ...restProps
}) => {
  const [isInput, showInput] = useState<boolean>(false);
  const dispath = useAppDispatch();
  const {user} = useAppSelector(appSelect);
  const onShowInput = useCallback(() => {
    if(!isInput) {
      showInput(true);
    } else {
      dispath(editProfile(form.values)).then(() => {
        showInput(false);
      })
    }
  }, [isInput, form.values])

  useEffect(() => {
    form.setFieldValue('name', user.name);
  }, [user.name])

  return (
    <div className={classNames(s.name, className)}>
      {
        isInput ?
          <div className={s.wrap}>
            <Input
              className={s.input}
              form={form}
              field={field}
              buttonType={'save'}
              onClickButtonSave={onShowInput}
              {...restProps}/>
          </div> :

          <button
            className={s.button}
            type={'button'}
            onClick={onShowInput}>
            {user.name || 'name'}
            <IconEdit className={s.icon}/>
          </button>
      }
    </div>
  );
};