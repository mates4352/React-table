import React, {FC} from 'react';
import s from './Input-range.module.scss';
import classNames from "classnames/bind";

type InputRangeType = {
  min: string
  max: string
  title: string
  className?: {
    inputRange?: string
  }
};

export const InputRange: FC<InputRangeType> = ({
  min,
  max,
  title,
  className,
  ...restProps
}) => {
  return (
    <div className={s.inputRange}>
      {title && <h3 className={s.title}>{title}</h3>}

      <div className={s.wrap}>
        <div className={classNames(s.value, s.value_min,)}>{min}</div>

        <div className={s.input}>
          <button
            className={classNames(s.circle, s.circle_min)}
            type={'button'}>
          </button>

          <div className={s.line}></div>

          <button
            className={classNames(s.circle, s.circle_max)}
            type={'button'}>
          </button>
        </div>

        <div className={classNames(s.value, s.value_max,)}>{max}</div>
      </div>
    </div>
  );
};
