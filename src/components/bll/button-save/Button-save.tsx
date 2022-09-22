import React, {FC, memo, ReactNode} from 'react';
import s from './Button-save.module.scss';

type ButtonSaveType = {
  className?: string
  type: 'button' | 'reset' | 'submit';
  onClickButton?: () => void
  children: ReactNode
};

export const ButtonSave: FC<ButtonSaveType> = memo(({
  className,
  children,
  onClickButton,
  ...restProps
}) => {
  return (
    <button className={s.button} onClick={onClickButton} {...restProps}>{children}</button>
  );
})