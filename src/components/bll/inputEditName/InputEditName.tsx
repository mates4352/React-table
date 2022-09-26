import React, {FC, useCallback, useEffect, useState} from 'react';
import s from './InputEditName.module.scss';
import {Input} from "../input/Input";
import {FieldInputProps} from "formik";
import classNames from "classnames/bind";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {appSelect} from "../../../app/App-select";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {IconEdit} from "../../icons/icon-edit/Icon-edit";
import {AnimatePresence, motion} from "framer-motion";
import {editProfile} from "../../../features/main/Main-thunk";

const animations = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0},
}

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
      <AnimatePresence>
        {isInput ?
          <motion.div
            className={s.wrap}
            variants={animations}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}>
            <Input
              className={s.input}
              form={form}
              field={field}
              buttonType={'save'}
              onClickButtonSave={onShowInput}
              {...restProps}/>
          </motion.div> :

          <motion.button
            className={s.button}
            type={'button'}
            onClick={onShowInput}
            variants={animations}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}>
            {user.name || 'name'}
            <IconEdit className={s.icon}/>
          </motion.button>
        }
      </AnimatePresence>
    </div>
  );
};