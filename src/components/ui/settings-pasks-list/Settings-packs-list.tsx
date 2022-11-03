import React, {ChangeEvent, FC, memo, useCallback, useState} from 'react';
import s from './Settings-packs-list.module.scss';
import {InputSearch} from "../../bll/inputSearch/InputSearch";
import {Tabs, valueTabType} from "../../bll/tabs/Tabs";
import {InputRange} from "../../bll/input-range/Input-range";
import {FilterRemove} from "../../bll/filter-remove/Filter-remove";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {filterPack, searchPack} from "../../../features/main/common/packs-list/Packs-list-slice";
import {getCardsPack} from "../../../features/main/common/packs-list/Packs-list-thunk";

type SettingsPasksListType = {};

export const SettingsPacksList: FC<SettingsPasksListType> = memo(() => {
  const dispatch = useAppDispatch()
  const {_id} = useAppSelector(state => state.app.user)
  const {page, pageCount} = useAppSelector(state => state.packsList)
  const [inputText, setText] = useState<string>('')
  const [valueTab, setValueTab] = useState<valueTabType>('All')
  const [valueInputRange, setValueInputRange] = React.useState<number[]>([0, 10]);

  const onInputChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }, [])
  const onSearchTable = useCallback(() => {
      dispatch(searchPack(inputText))
  }, [inputText])
  const onClickButtonMy = useCallback(() => {
    setValueTab('My')
    dispatch(filterPack({type: 'My', userId: _id}));
  }, [])
  const onClickButtonAll = useCallback(() => {
    setValueTab('All')
    dispatch(filterPack({type: 'All'}));
  }, [])
  const onChangeValueInputRange = useCallback((valueMinMax: number[]) => () => {
    dispatch(getCardsPack({page: page, pageCount: pageCount, min: valueMinMax[0], max: valueMinMax[1]}))
  }, [])
  const onFilterRemove = useCallback(() => {
    setValueTab('All')
    setText('')
    setValueInputRange([0, 10])
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
        onSearchTable={onSearchTable}
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
        value={valueInputRange}
        title={'Number of cards'}
        onChangeValue={onChangeValueInputRange}
        setValue={setValueInputRange}
      />

      <FilterRemove onClickButton={onFilterRemove}/>
    </div>
  );
})
