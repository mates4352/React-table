import React, {FC, memo, useCallback} from 'react';
import {PopupAction} from "../../Popup-action";
import {ContentDeletePack} from "../../content/content-delete-pack/Content-delete-pack";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {setPopup} from "../../../../../features/main/common/packs-list/Packs-list-slice";

type PopupActionDeletePackType = {

};
export const PopupActionDeletePack: FC<PopupActionDeletePackType> = memo(() => {
  const dispatch = useAppDispatch();
  const {isPopup} = useAppSelector(state => state.packsList);
  const onClickPopupDeletePack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.DeletePack, isPopup: !isPopup.isPopupDeletePack}))
  }, [isPopup.isPopupDeletePack])

  return (
    <PopupAction
      title={'Delete pack'}
      isPopup={isPopup.isPopupDeletePack}
      onClickPopup={onClickPopupDeletePack}
    >
      <ContentDeletePack/>
    </PopupAction>
  );
})
