import React, {FC, memo, useCallback} from 'react';
import s from './Popup-action-delete-pack.module.scss';
import {PopupAction} from "../../Popup-action";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {setPopup} from "../../../../../features/main/common/packs-list/Packs-list-slice";
import {Button} from "../../../../bll/button/Button";
import {deletePack, getCardsPack} from "../../../../../features/main/common/packs-list/Packs-list-thunk";

type PopupActionDeletePackType = {

};
export const PopupActionDeletePack: FC<PopupActionDeletePackType> = memo(() => {
  const dispatch = useAppDispatch();
  const {isPopup, idPack, page, pageCount} = useAppSelector(state => state.packsList);
  const onClickPopupDeletePack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.DeletePack, isPopup: !isPopup.isPopupDeletePack}))
  }, [isPopup.isPopupDeletePack])

  const onClickDeletePack = useCallback(async () => {
    await dispatch(deletePack(idPack))
    dispatch(getCardsPack({page: page, pageCount: pageCount}))
    dispatch(setPopup({popup: PopupPack.DeletePack, isPopup: !isPopup.isPopupDeletePack}))
  }, [dispatch, idPack])

  return (
    <PopupAction
      title={'Delete pack'}
      isPopup={isPopup.isPopupDeletePack}
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
