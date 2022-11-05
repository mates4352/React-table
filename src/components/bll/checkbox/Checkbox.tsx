import React, {FC, memo} from 'react';
import s from './Checkbox.module.scss'
import classNames from "classnames";
import {FieldInputProps} from "formik";

type CheckboxType = {
  field?: FieldInputProps<any>
  label: string
  className?: string
};

export const Checkbox: FC<CheckboxType> = memo((
  {
    label,
    className,
    field,
    ...props
  }) => {
  return (
    <div className={classNames(s.checkbox, className)}>
      <input
        className={classNames(s.input, s.visually_hidden)}
        type={'checkbox'}
        id={label}
        {...field}
        {...props}/>

      <label className={s.label} htmlFor={label}>{label}</label>
    </div>

  );
})
