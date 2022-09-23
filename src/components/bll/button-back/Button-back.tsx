import React, {FC, memo, ReactNode} from 'react';
import s from './Button-back.module.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";
import {IconArrow} from "../../icons/icon-arrow/Icon-arrow";

type ButtonBackType = {
  className?: string
  children: ReactNode
};

export const ButtonBack: FC<ButtonBackType> = memo(({
  children,
  className,
  ...restProps
}) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  }

  return (
    <button
      className={classNames(s.button, className)}
      onClick={back}
      {...restProps}>
      <IconArrow className={s.arrow}/>
      {children}
    </button>
  );
})