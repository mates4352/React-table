import React, {FC, memo} from 'react';
import s from './Caption.module.scss';
import classNames from "classnames/bind";

type CaptionType = {
  className?: string
  children: React.ReactNode
};

export const Caption: FC<CaptionType> = memo(({
  className,
  children,
}) => {

  return (
    <p className={classNames(s.caption, className)}>
      {children}
    </p>
  );
})