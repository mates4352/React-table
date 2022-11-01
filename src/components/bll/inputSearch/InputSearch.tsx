import React, {ChangeEvent, FC, memo, useEffect} from 'react';
import s from './InputSearch.module.scss';
import classNames from "classnames/bind";
import {IconSearch} from "../../icons/icon-search/Icon-search";

type InputSearchType = {
  type: string
  placeholder?: string
  value: string
  title?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSearchTable?: () => void
  className?: {
    inputSearch?: string
    wrap?: string
    input?: string
  }
};

export const InputSearch: FC<InputSearchType> = memo(({
  title,
  className,
  onSearchTable,
  value,
  ...restProps
}) => {

  useEffect(() => {
      const idTimeout = setTimeout(() => {
        onSearchTable && onSearchTable()
      }, 350)
      return () => clearTimeout(idTimeout)
  }, [value])

  return (
    <div className={classNames(s.inputSearch, className?.inputSearch)}>
      {title && <h3 className={s.title}>{title}</h3>}

      <div className={classNames(s.wrap, className?.wrap)}>
        <input
          className={classNames(s.input, className?.input)}
          value={value}
          {...restProps}/>
        <IconSearch className={s.icon}/>
      </div>
    </div>

  );
})
