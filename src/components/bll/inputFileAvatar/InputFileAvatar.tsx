import React, {ChangeEvent, FC, memo, useState} from 'react';
import s from './InputFileAvatar.module.scss';
import {Avatar} from "../../ui/avatar/Avatar";
import classNames from "classnames/bind";
import {IconPhoto} from "../../icons/icon-photo/Icon-photo";
import {FieldInputProps} from "formik";
import {getBase64} from "../../../utils/helpers/functions/getBase64";
import {ImageFormat} from "../../../utils/enum/image-format";

type InputFileAvatarType = {
  className?: string
  src?: string
  field: FieldInputProps<any>,
  form: any
};

export const InputFileAvatar: FC<InputFileAvatarType> = memo(({
  className,
  src,
  form,
  ...restProps
}) => {
  const [image, setImage] = useState<string>();

  const onChangeFileImage = (e: ChangeEvent<any>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }
    const type = e.target.files[0].type;

    if(type === ImageFormat.PNG || type === ImageFormat.JPEG || type === ImageFormat.WEBP) {
      getBase64(e.target.files[0]).then(result => {
        form.setFieldValue('avatar', result);
        if(typeof result === 'string') setImage(result);
      })
    }
  }

  return (
    <label className={classNames(s.label, className)}>
      <input className={s.visually_hidden} type="file" onChange={onChangeFileImage} {...restProps}/>
      <Avatar className={s.avatar} src={src || image} alt={'Пользователь'}/>
      <IconPhoto className={s.photo}/>
    </label>
  );
})