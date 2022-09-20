import React, {FC, memo, ReactNode} from 'react';
import s from './Button.module.scss';
import classNames from "classnames/bind";

type ButtonType = {
  type: "button" | "submit" | "reset"
  buttonType?: 'common' | 'cansel' | 'logout'
  disabled?: boolean
  children: ReactNode
  className?: string
  onClickButton?: () => void
};

export const Button: FC<ButtonType> = memo(({
  type,
  buttonType = 'common',
  disabled,
  className,
  children,
  onClickButton,
}) => {
  return (
    <button
      className={classNames(
        buttonType === 'common' && s.button,
        buttonType === 'cansel' && s.button_cansel,
        buttonType === 'logout' && s.button_logout,
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClickButton}>
      {children}
    </button>
  );
})