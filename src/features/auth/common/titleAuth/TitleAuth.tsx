import React, {FC, memo} from 'react';
import s from './TitleAuth.module.scss';
import classNames from "classnames/bind";

type TitleAuthType = {
  stylesRules?: string
  children: string
};

export const TitleAuth: FC<TitleAuthType> = memo(props => {
  const {children, stylesRules} = props
  return (
    <h2 className={classNames(s.title, stylesRules)}>
      {children}
    </h2>
  );
})