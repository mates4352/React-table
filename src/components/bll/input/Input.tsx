import React, { FC, memo, useState} from 'react';
import s from './Input.module.scss';
import classNames from "classnames/bind";
import {IconEye} from "../../icons/icon-eye/Icon-eye";
import {FieldInputProps, FormikState} from "formik";
import {Error} from "../../ui/error/Error";

type InputType = {
  field: FieldInputProps<any>,
  form: FormikState<any>
  label: string
  type: string
  className?: string // кастомные стили для компоненты через css var().
};

export const Input: FC<InputType> = memo(({
  label,
  type,
  className,
  field,
  form: {touched, errors, values},
  ...props
}) => {
  const [typeInput, setTypeInput] = useState<string>(type);
  const name = field.name;
  const touch = touched[name];
  const error = errors[name];
  const value = values[name];
  const isError = touch && error;
  const isValid = touch && !error;
  const isType = typeInput === 'password' ? 'text' : 'password';
  const onEditTypeInput = (type: string) => () => setTypeInput(type)
  return (
    <div className={classNames(s.input, className)}>
      <div className={classNames(s.wrap, isError && s.wrap_error)}>
        <input
          className={s.field}
          type={typeInput}
          id={label}
          {...field}
          {...props}
        />

        <label
          className={classNames(
            s.label,
            value && s.label_value,
            isError && s.label_error,
            isValid && s.label_valid
          )}
          htmlFor={label}>
          {label}
        </label>

        {type === 'password' && value &&
            <button
                className={s.button}
                type={'button'}
                onClick={onEditTypeInput(isType)}>
                <IconEye></IconEye>
            </button>
        }

        <div className={classNames(s.line, isError && s.line_error, isValid && s.line_valid)}></div>
      </div>

      <Error
        isError={!!isError}
        error={String(error)}/>
    </div>
  );
})