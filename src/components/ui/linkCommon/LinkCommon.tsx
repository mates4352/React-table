import React, {FC, memo} from 'react';
import s from './LinkCommon.module.scss';
import {Link} from "react-router-dom";
import classNames from "classnames/bind";

type LinkCommonType = {
  stylesRules?: string
  children: string
  routing: string
};

export const LinkCommon: FC<LinkCommonType> = memo(props => {
  const {
    stylesRules,
    children,
    routing,
  } = props;

  return (
    <Link
      className={classNames(s.link, stylesRules)}
      to={routing}>
      {children}
    </Link>
  );
})