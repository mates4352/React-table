import React, {FC, memo} from 'react';
import s from './Filter-remove.module.scss';
import {IconFilterRemove} from "../../icons/icon-filter-remove/Icon-filter-remove";
import classNames from "classnames";

type FilterRemoveType = {
  className?: string
  type?: 'button' | 'reset' | 'submit'
  onClickButton?: () => void
};

export const FilterRemove: FC<FilterRemoveType> = memo(({
  className,
  type = 'button',
  onClickButton,
  ...restProps
}) => {
  return (
    <button
      className={classNames(s.filterRemove, className)}
      onClick={onClickButton}
      {...restProps}>
      <IconFilterRemove className={s.icon}/>
    </button>
  );
})
