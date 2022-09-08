import React, { FC, memo, useState} from 'react';
import s from './Input.module.scss';
import classNames from "classnames/bind";
import {IconEye} from "../../icons/eye/Eye";
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
  const isType = typeInput === 'password' ? 'text' : 'password';
  const touch = touched[field.name];
  const error = errors[field.name];
  const value = values[field.name];
  const isError = touch && error;
  const isValid = touch && !error;
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
            value && s.label__value,
            isError && s.label__error,
            isValid && s.label__valid
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

        <div className={classNames(s.line, isError && s.line__error, isValid && s.line__valid)}></div>
      </div>

      <Error
        isError={!!isError}
        error={String(errors[field.name])}/>
    </div>
  );
})