import React, {FC, memo} from 'react';
import s from './InputFileAvatar.module.scss';
import {Avatar} from "../../ui/avatar/Avatar";
import classNames from "classnames/bind";
import {IconPhoto} from "../../icons/icon-photo/Icon-photo";

type InputFileAvatarType = {
  className?: string
  src: string
};

export const InputFileAvatar: FC<InputFileAvatarType> = memo(({
  className,
  src,
}) => {
  return (
    <label className={classNames(s.label, className)}>
      <input className={s.visually_hidden} type="file"/>
      <Avatar className={s.avatar} src={src} alt={'Пользователь'}/>
      <IconPhoto className={s.photo}/>
    </label>
  );
})