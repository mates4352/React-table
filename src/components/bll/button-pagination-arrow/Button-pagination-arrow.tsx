import React, {FC, memo} from 'react';
import s from './button-pagination-arrow.module.scss'
import classNames from "classnames/bind";
import {IconSmallArrow} from "../../icons/icon-small-arrow/Icon-small-arrow";

type ButtonPaginationArrowType = {
  className?: string
  classNameIcon?: string
  disabled?: boolean
  onClickButton?: () => void
};

export const ButtonPaginationArrow: FC<ButtonPaginationArrowType> = memo(({
  className,
  classNameIcon,
  disabled,
  onClickButton
}) => {
  return (
    <button className={classNames(s.buttonArrow, className)} disabled={disabled} type={'button'} onClick={onClickButton}>
      <IconSmallArrow className={classNameIcon}/>
    </button>
  );
})
