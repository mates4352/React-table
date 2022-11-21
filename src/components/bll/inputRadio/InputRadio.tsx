import React from 'react';
import {FC, memo} from "react";
import s from './InputRadio.module.scss';

type InputRadioType = {
  name: string
  text: string
  onClickInputRadio?: () => void
};

export const InputRadio: FC<InputRadioType> = memo(({
  text,
  onClickInputRadio,
  ...props
}) => {
  return (
    <label className={s.label} onClick={onClickInputRadio}>
      <input className={s.input} type="radio" {...props}/>
      {text}
    </label>
  );
})
