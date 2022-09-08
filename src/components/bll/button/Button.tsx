import React, {FC, memo} from 'react';
import s from './Button.module.scss';
import classNames from "classnames/bind";

type ButtonType = {
  type: "button" | "submit" | "reset"
  buttonType?: 'cansel'
  disabled?: boolean
  children: string
  className?: string
  onClickButton?: () => void
};

export const Button: FC<ButtonType> = memo(({
  type,
  buttonType,
  disabled,
  className,
  children,
  onClickButton,
}) => {
  return (
    <button
      className={classNames(
        s.button,
        buttonType === 'cansel' && s.button_cansel,
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClickButton}>
      {children}
    </button>
  );
})