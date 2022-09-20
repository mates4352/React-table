import React, {FC, memo, ReactNode} from 'react';
import s from './Button-save.module.scss';

type ButtonSaveType = {
  className?: string
  type: 'button' | 'reset' | 'submit';
  children: ReactNode
};

export const ButtonSave: FC<ButtonSaveType> = memo(({
  className,
  children,
  ...restProps
}) => {
  return (
    <button className={s.button}>{children}</button>
  );
})