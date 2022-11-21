import React, {FC, memo, ReactNode} from 'react';
import s from './Title.module.scss';
import classNames from "classnames";

type TitleType = {
  className?: string
  children: ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
};

export const Title: FC<TitleType> = memo(({
  type,
  children,
  className,
}) => {
  return (
    <>
      {
        type === 'h1' ?
          <h1 className={classNames(s.title, className)}>
            {children}
          </h1> :
        type === 'h2' ?
          <h2 className={classNames(s.title, className)}>
            {children}
          </h2> :
        type === 'h3' ?
          <h3 className={classNames(s.title, className)}>
            {children}
          </h3> :
        type === 'h4' ?
          <h4 className={classNames(s.title, className)}>
            {children}
          </h4> :
        type === 'h5' ?
          <h5 className={classNames(s.title, className)}>
            {children}
          </h5> :
        type === 'h6' &&
          <h6 className={classNames(s.title, className)}>
            {children}
          </h6>
      }
    </>
  );
})
