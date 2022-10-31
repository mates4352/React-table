import React, {FC, memo, ReactNode} from 'react';
import s from './Pagination-button.module.scss';
import classNames from "classnames/bind";

type PaginationButtonType = {
  className?: string
  onClickButton?: () => void
  children?: ReactNode
  pageCurrent?: number
};

export const PaginationButton: FC<PaginationButtonType> = memo(({
  className,
  onClickButton,
  children,
  pageCurrent
}) => {
  return (
    // eslint-disable-next-line eqeqeq
    <button className={classNames(s.button, children == pageCurrent && s.buttonActive, className)} type={'button'} onClick={onClickButton}>
      {children}
    </button>
  );
})
