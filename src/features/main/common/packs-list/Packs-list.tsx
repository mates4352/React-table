import React, {FC, memo, useCallback} from 'react';
import s from './Packs-list.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {Title} from "../../../../components/ui/title/Title";
import {Button} from "../../../../components/bll/button/Button";
import {AnimationPage} from "../../../../components/animations/animationPage";
import {TablePacksList} from "../../../../components/ui/table-packs-list/Table-packs-list";
import {SettingsPacksList} from "../../../../components/ui/settings-pasks-list/Settings-packs-list";
import {PopupAction} from "../../../../components/ui/popup-action/Popup-action";
import {ContentNewPack} from "../../../../components/ui/popup-action/content/content-new-pack/Content-new-pack";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {setPopup} from "../../Main-slice";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {PopupPack} from "../../../../utils/enum/popup";
import {
  ContentDeletePack
} from "../../../../components/ui/popup-action/content/content-delete-pack/Content-delete-pack";
import {ContentEditPack} from "../../../../components/ui/popup-action/content/content-edit-pack/Content-edit-pack";
import {
  PopupActionNewPack
} from "../../../../components/ui/popup-action/popups/popup-action-new-pack/Popup-action-new-pack";
import {
  PopupActionEditPack
} from "../../../../components/ui/popup-action/popups/popup-action-edit-pack/Popup-action-edit-pack";
import {
  PopupActionDeletePack
} from "../../../../components/ui/popup-action/popups/popup-action-delete-pack/Popup-action-delete-pack";

type PacksListType = {};

export const PacksList: FC<PacksListType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {isPopup} = useAppSelector(state => state.main);
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
          <TablePacksList/>
        </AnimationPage>
      </Container>

      <PopupActionNewPack/>
      <PopupActionEditPack/>
      <PopupActionDeletePack/>
    </>
  );
})
