import React, {FC, memo, ReactNode} from 'react';
import s from './Button-back.module.scss';
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import {IconArrow} from "../../icons/icon-arrow/icon-arrow";

type ButtonBackType = {
  className?: string
  children: ReactNode
  to: string
};

export const ButtonBack: FC<ButtonBackType> = memo(({
  children,
  className,
  to,
  ...restProps
}) => {
  const navigate = useNavigate();
  const back = () => {
    navigate(to)
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
