import React, {ChangeEvent, FC, memo, useCallback, useState} from 'react';
import s from './Packs-list.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {Title} from "../../../../components/ui/title/Title";
import {Button} from "../../../../components/bll/button/Button";
import {AnimationPage} from "../../../../components/animations/animationPage";
import {InputSearch} from "../../../../components/bll/inputSearch/InputSearch";
import {Tabs, valueTabType} from "../../../../components/bll/tabs/Tabs";
import {InputRange, newValueInputRangeType} from "../../../../components/bll/input-range/Input-range";
import {FilterRemove} from "../../../../components/bll/filter-remove/Filter-remove";
import {TablePacksList} from "../../../../components/ui/table-packs-list/Table-packs-list";
import {SettingsPacksList} from "../../../../components/ui/settings-pasks-list/Settings-packs-list";
import {PopupAction} from "../../../../components/ui/popup-action/Popup-action";
import {ContentNewPack} from "../../../../components/ui/popup-action/content/content-new-pack/Content-new-pack";

type PacksListType = {};

export const PacksList: FC<PacksListType> = memo(({}) => {
  const [isPopup, setPopup] = useState<boolean>(false)
  const onClickPopupOpen = useCallback(() => {
    setPopup(true)
  }, [])
  const onClickPopupClose = useCallback(() => {
    setPopup(false)
  }, [])
  return (
    <>
      <Container className={s.pasksList} type={'section'}>
        <div className={s.wrap}>
          <Title className={s.title} type={"h2"}>Packs list</Title>

          <Button
            className={s.button}
            type={"button"}
            onClickButton={onClickPopupOpen}>
            Add new pack
          </Button>
        </div>

        <SettingsPacksList/>

        <AnimationPage>
          <TablePacksList/>
        </AnimationPage>
      </Container>

      <PopupAction
        title={'Edit pack'}
        isPopup={isPopup}
        onClickPopup={onClickPopupClose}
      >
        <ContentNewPack onClickNewPack={onClickPopupClose}/>
      </PopupAction>
    </>
  );
})
