import React, {ChangeEvent, FC, memo, useState} from 'react';
import s from './Input.module.scss';
import classNames from "classnames/bind";
import {IconEye} from "../../icons/eye/Eye";
import {FieldMetaProps} from "formik";
import {motion, AnimatePresence} from "framer-motion";

type InputType = {
  formikError: FieldMetaProps<string>
  value: string
  label: string
  error?: string
  name: string
  type: string
  id: string
  stylesRules?: string // кастомные стили для компоненты через css var().
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input: FC<InputType> = memo(({
  formikError,
  value,
  label,
  error,
  type,
  id,
  stylesRules,
  ...props
}) => {
  const [typeInput, setTypeInput] = useState<string>(type);
  const isType = typeInput === 'password' ? 'text' : 'password';
  const isError = formikError.touched && formikError.error;
  const isValid = formikError.touched && !formikError.error;
  const onEditTypeInput = (type: string) => () => setTypeInput(type)

  return (
    <div className={classNames(s.input, stylesRules)}>
      <div className={classNames(s.wrap, isError && s.wrap_error)}>
        <input
          className={s.field}
          value={value}
          type={typeInput}
          id={id}
          {...props}
        />

        <label
          className={classNames(s.label, value && s.label__value, isError && s.label__error, isValid && s.label__valid)}
          htmlFor={id}>
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

      <AnimatePresence>
        {!!isError && (
          <motion.small
            className={s.error}
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0}}>
            {formikError.error}
          </motion.small>
        )}
      </AnimatePresence>
    </div>
  );
})