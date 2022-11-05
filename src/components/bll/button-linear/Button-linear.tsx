import React, {FC, memo, ReactNode} from 'react';
import s from './Button-linear.module.scss';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

type CommonButtonLinearType = {
  icon?: ReactNode
  children?: ReactNode
  className?: string
  onClickButton?: () => void
};

type ButtonLinearType = CommonButtonLinearType & {
  button?: boolean
  type: "button" | "submit" | "reset"
  href?: never
};

type LinkLinearType = CommonButtonLinearType & {
  link?: boolean
  href?: any
  type?: never
};

type ButtonType = ButtonLinearType | LinkLinearType;

export const ButtonLinear: FC<ButtonType> = memo(({
  type = 'button',
  icon,
  href,
  className,
  children,
  onClickButton,
  ...restProps
}) => {
  return (
    <>
      {!href ?
        <button
          className={classNames(s.button, className)}
          onClick={onClickButton}
          {...restProps}>
          {icon}
          {children}
        </button>
        :
        <NavLink
          className={({isActive}) =>
            isActive ?
              classNames(s.button, className, s.button_active) :
              classNames(s.button, className)
          }
          to={href}
          {...restProps}>
          {icon}
          {children}
        </NavLink>
      }
    </>

  );
})
