import React, {ChangeEvent, FC, memo, useCallback, useState} from 'react';
import s from './Settings-packs-list.module.scss';
import {InputSearch} from "../../bll/inputSearch/InputSearch";
import {Tabs, valueTabType} from "../../bll/tabs/Tabs";
import {InputRange, newValueInputRangeType} from "../../bll/input-range/Input-range";
import {FilterRemove} from "../../bll/filter-remove/Filter-remove";

type SettingsPasksListType = {};

export const SettingsPacksList: FC<SettingsPasksListType> = memo(() => {
  const [inputText, setText] = useState<string>('')
  const [valueTab, setValueTab] = useState<valueTabType>('All')

  const onInputChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }, [])
  const onClickButtonMy = useCallback(() => {
    setValueTab('My')
  }, [])
  const onClickButtonAll = useCallback(() => {
    setValueTab('All')
  }, [])
  const onChangeValueInputRange = useCallback((newValue: newValueInputRangeType) => {
    console.log(newValue)
  }, [])

  return (
    <div className={s.settings}>
      <InputSearch
        className={{
          inputSearch: s.inputSearch,
          input: s.input
        }}
        title={'Search'}
        type={'text'}
        placeholder={'Provide your text'}
        value={inputText}
        onChange={onInputChangeValue}
      />

      <Tabs
        className={{
          tabs: s.tabs
        }}
        title={'Show packs cards'}
        valueTab={valueTab}
        onClickButtonMy={onClickButtonMy}
        onClickButtonAll={onClickButtonAll}
      />

      <InputRange
        min={0}
        max={10}
        title={'Number of cards'}
        onChangeValue={onChangeValueInputRange}
      />
      <FilterRemove/>
    </div>
  );
})
