import React, {FC, memo, useCallback} from 'react';
import s from './Popup-action-delete-pack.module.scss';
import {PopupAction} from "../../Popup-action";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {setPopupPack} from "../../../../../features/main/common/packs-list/Packs-list-slice";
import {Button} from "../../../../bll/button/Button";

type PopupActionDeletePackType = {
  onDeletePack?: () => void
};
export const PopupActionDeletePack: FC<PopupActionDeletePackType> = memo(({
  onDeletePack
}) => {
  const dispatch = useAppDispatch();
  const {isPopupPacks} = useAppSelector(state => state.packsList);
  const onClickPopupDeletePack = useCallback(() => {
    dispatch(setPopupPack({popup: PopupPack.DeletePack, isPopup: !isPopupPacks.isPopupDeletePack}))
  }, [isPopupPacks.isPopupDeletePack])

  const onClickDeletePack = useCallback(() => {
    onDeletePack && onDeletePack()
  }, [dispatch, onDeletePack])

  return (
    <PopupAction
      title={'Delete pack'}
      isPopup={isPopupPacks.isPopupDeletePack}
      onClickPopup={onClickPopupDeletePack}
    >
      <div className={s.content}>
        <p className={s.text}>
          Do you really want to remove <span>Pack Name?</span> <br/> All cards will be deleted.
        </p>

        <Button className={s.button_delete} type={'button'} onClickButton={onClickDeletePack}>Delete</Button>
      </div>
    </PopupAction>
  );
})
