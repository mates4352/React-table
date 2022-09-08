import React, {FC, memo} from 'react';
import s from './Caption.module.scss';
import classNames from "classnames/bind";

type CaptionType = {
  stylesRules?: string
  children: string
};

export const Caption: FC<CaptionType> = memo(({
  stylesRules,
  children,
}) => {

  return (
    <p className={classNames(s.caption, stylesRules)}>
      {children}
    </p>
  );
})