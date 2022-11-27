import React, {ChangeEvent, FC} from 'react';
import s from './InputImage.module.scss';
import classNames from "classnames";
import {ImageFormat} from "../../../utils/enum/image-format";
import {getBase64} from "../../../utils/helpers/functions/getBase64";
import {FieldInputProps} from "formik";

type InputImageType = {
  className?: string
  field: FieldInputProps<any>,
  setImage: (value: string) => void
  form: any
};

export const InputImage: FC<InputImageType> = ({
  className,
  form,
  setImage,
  field,
  ...restProps
}) => {
  const onChangeFileImage = (e: ChangeEvent<any>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }
    const type = e.target.files[0].type;

    if(type === ImageFormat.PNG || type === ImageFormat.JPEG || type === ImageFormat.WEBP) {
      getBase64(e.target.files[0]).then(result => {
        form.setFieldValue(field.name, result);
        if(typeof result === 'string') setImage(result);
      })
    }
  }

  return (
    <label className={classNames(s.label, className)}>
      Add {field.name}
      <input className={s.visually_hidden} type="file" onChange={onChangeFileImage} {...restProps}/>
    </label>
  );
};
