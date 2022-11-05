import React, {FC, memo} from 'react';
import s from './LinkCommon.module.scss';
import {Link} from "react-router-dom";
import classNames from "classnames";

type LinkCommonType = {
  className?: string
  children: string
  routing: string
};

export const LinkCommon: FC<LinkCommonType> = memo(({
  className,
  children,
  routing,
}) => {

  return (
    <Link
      className={classNames(s.link, className)}
      to={routing}>
      {children}
    </Link>
  );
})
