import React, {FC, ReactNode, memo} from 'react';
import s from './Container.module.scss';
import classNames from "classnames/bind";

type ContainerType = {
  className?: string
  children: ReactNode
  type: 'section' | 'div'
};

export const Container: FC<ContainerType> = memo(({
  className,
  children,
  type,
}) => {
  return (
    <>
      {type === 'section' ?
        <section className={classNames(s.container, className)}>
          {children}
        </section>
        :
        <div className={classNames(s.container, className)}>
          {children}
        </div>
      }
    </>
  );
})