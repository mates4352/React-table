import React, {FC, memo} from 'react';
import s from './TitleAuth.module.scss';
import classNames from "classnames/bind";

type TitleAuthType = {
  className?: string
  children: string
};

export const TitleAuth: FC<TitleAuthType> = memo(({
  children,
  className,
}) => {

  return (
    <h2 className={classNames(s.title, className)}>
      {children}
    </h2>
  );
})