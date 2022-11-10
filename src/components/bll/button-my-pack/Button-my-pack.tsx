import React, {FC} from 'react';
import s from './Button-my-pack.module.scss';
import classNames from "classnames";
import {IconEllipse} from "../../icons/icon-ellipse/Icon-ellipse";

type ButtonMyPackType = {
  className?: string
  onClickButton: () => void
};

export const ButtonMyPack: FC<ButtonMyPackType> = ({
  className,
  onClickButton
}) => {
  return (
    <button className={classNames(s.button, className)} type={'button'} onClick={onClickButton}>
      <IconEllipse  className={s.icon}/>
    </button>
  );
};
