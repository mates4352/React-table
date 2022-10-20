import React, {ChangeEvent, FC, memo} from 'react';
import s from './InputSearch.module.scss';
import classNames from "classnames/bind";
import {IconSearch} from "../../icons/icon-search/Icon-search";

type InputSearchType = {
  type: string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: {
    inputSearch?: string
    input?: string
  }
};

export const InputSearch: FC<InputSearchType> = memo(({
  className,
  ...restProps
}) => {
  return (
    <div className={classNames(s.inputSearch, className?.inputSearch)}>
      <input
        className={classNames(s.input, className?.input)}
        {...restProps}/>
      <IconSearch className={s.icon}/>
    </div>
  );
})
