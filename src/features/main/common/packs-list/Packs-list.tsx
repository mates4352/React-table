import React, {FC, memo, useCallback} from 'react';
import s from './Packs-list.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {Title} from "../../../../components/ui/title/Title";
import {Button} from "../../../../components/bll/button/Button";
import {AnimationPage} from "../../../../components/animations/animationPage";
import {TablePacksList} from "../../../../components/ui/table-packs-list/Table-packs-list";
import {SettingsPacksList} from "../../../../components/ui/settings-pasks-list/Settings-packs-list";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {PopupPack} from "../../../../utils/enum/popup";

import {
  PopupActionNewPack
} from "../../../../components/ui/popup-action/popups/popup-action-new-pack/Popup-action-new-pack";
import {
  PopupActionEditPack
} from "../../../../components/ui/popup-action/popups/popup-action-edit-pack/Popup-action-edit-pack";
import {
  PopupActionDeletePack
} from "../../../../components/ui/popup-action/popups/popup-action-delete-pack/Popup-action-delete-pack";
import {Pagination} from "../../../../components/bll/pagination/Pagination";
import {setPopup} from "./Packs-list-slice";

type PacksListType = {};

export const PacksList: FC<PacksListType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {isPopup, page, packsList} = useAppSelector(state => state.packsList);
  const onClickPopupNewPack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.NewPack, isPopup: !isPopup.isPopupNewPack}))
  }, [isPopup.isPopupNewPack])

  return (
    <>
      <Container className={s.pasksList} type={'section'}>
        <div className={s.wrap}>
          <Title className={s.title} type={"h2"}>Packs list</Title>

          <Button
            className={s.button}
            type={"button"}
            onClickButton={onClickPopupNewPack}>
            Add new pack
          </Button>
        </div>

        <SettingsPacksList/>

        <AnimationPage>
          <TablePacksList className={s.table}/>
        </AnimationPage>

        <Pagination page={page} maxPageNumber={5} pageCurrentCount={packsList.cardPacksTotalCount}/>
      </Container>

      <PopupActionNewPack/>
      <PopupActionEditPack/>
      <PopupActionDeletePack/>
    </>
  );
})
