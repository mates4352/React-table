import React, {FC, memo, ReactNode} from 'react';
import s from './Wrapper-card.module.scss';
import classNames from "classnames/bind";

type WrapperCardType = {
  className?: string
  children: ReactNode;
};

export const WrapperCard: FC<WrapperCardType> = memo(({
  className,
  children,
}) => {
  return (
    <div className={classNames(s.wrapper_card, className)}>
      {children}
    </div>
  );
})