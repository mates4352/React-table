import React, {FC, memo} from 'react';
import s from './Tabs.module.scss';
import classNames from "classnames/bind";

export type valueTabType = 'My' | 'All';

type TabsType = {
  title: string
  valueTab: valueTabType
  onClickButtonMy: () => void
  onClickButtonAll: () => void
};

export const Tabs:FC<TabsType> = memo(({
  valueTab,
  onClickButtonMy,
  onClickButtonAll,
  title,
  ...restProps
}) => {
  return (
    <div>
      {title && <h3 className={s.title}>{title}</h3>}

      <div className={classNames(s.wrap, valueTab === 'My' && s.wrap_active)}>
        <button
          className={classNames(s.button, !(valueTab === 'My') && s.button_unActive, valueTab === 'My' && s.button_active)}
          type={'button'}
          onClick={onClickButtonMy}>
          My
        </button>

        <button
          className={classNames(s.button, !(valueTab === 'All') && s.button_unActive, valueTab === 'All' && s.button_active)}
          type={'button'}
          onClick={onClickButtonAll}>
          All
        </button>
      </div>
    </div>
  );
})
