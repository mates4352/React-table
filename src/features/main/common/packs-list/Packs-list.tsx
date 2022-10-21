import React, {ChangeEvent, FC, memo, useCallback, useState} from 'react';
import s from './Packs-list.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {Title} from "../../../../components/ui/title/Title";
import {Button} from "../../../../components/bll/button/Button";
import {AnimationPage} from "../../../../components/animations/animationPage";
import {InputSearch} from "../../../../components/bll/inputSearch/InputSearch";
import {Tabs, valueTabType} from "../../../../components/bll/tabs/Tabs";

type PacksListType = {};

export const PacksList: FC<PacksListType> = memo(({}) => {
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

  return (
    <Container className={s.pasksList} type={'section'}>
      <AnimationPage>
        <div className={s.wrap}>
          <Title className={s.title} type={"h2"}>Packs list</Title>

          <Button
            className={s.button}
            type={"button"}>
            Add new pack
          </Button>
        </div>

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
            title={'Show packs cards'}
            valueTab={valueTab}
            onClickButtonMy={onClickButtonMy}
            onClickButtonAll={onClickButtonAll}
          />
        </div>
      </AnimationPage>
    </Container>
  );
})
