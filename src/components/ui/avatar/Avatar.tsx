import React, {FC, memo} from 'react';
import s from './Avatar.module.scss';
import classNames from "classnames/bind";
import avatar from './../../../assets/images/avatar.jpg';

type AvatarType = {
  className?: string
  src?: string
  alt: string
};

export const Avatar: FC<AvatarType> = memo(({
  className,
  src,
  alt,
}) => {
  return (
    <img className={classNames(s.avatar, className)} src={src || avatar} alt={alt}/>
  );
})