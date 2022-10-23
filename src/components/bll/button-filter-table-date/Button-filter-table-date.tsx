import React, {FC, useState} from 'react';
import s from './Button-filter-table-date.module.scss';
import classNames from "classnames/bind";
import {IconPolygon} from "../../icons/icon-polygon/Icon-polygon";

type ButtonFilterTableDateType = {
  children: string
  className?: string
  onClickButton: () => void
};
export const ButtonFilterTableDate: FC<ButtonFilterTableDateType> = ({
  children,
  className,
  onClickButton,
  ...restProps
}) => {
  const [state, setState] = useState<boolean>(false)
  const onClickButtonFilter = () => {
    setState((state) => !state)
    onClickButton()
  }
  return (
    <button
      className={classNames(s.button, className)}
      type={'button'}
      onClick={onClickButtonFilter}
      {...restProps}>
      {children}
      <IconPolygon className={classNames(s.icon, state && s.iconFilter)}/>
    </button>
  );
};
