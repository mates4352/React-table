import React, {FC, useEffect, useState} from 'react';
import s from './InputEditName.module.scss';
import {Input} from "../input/Input";
import {FieldInputProps} from "formik";
import classNames from "classnames/bind";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {appSelect} from "../../../app/App-select";
import {ButtonSave} from "../button-save/Button-save";

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
  const {user} = useAppSelector(appSelect);
  const onShowInput = () => {
    showInput(isInput => !isInput)
  }

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
              {...restProps}/>
          </div> :

          <button
            className={s.button}
            type={'button'}
            onClick={onShowInput}>
            {user.name || 'name'}
          </button>
      }
    </div>
  );
};