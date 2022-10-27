import React, {FC, memo, useCallback} from 'react';
import {PopupAction} from "../../Popup-action";
import {ContentEditPack} from "../../content/content-edit-pack/Content-edit-pack";
import {setPopup} from "../../../../../features/main/Main-slice";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";

type PopupActionEditPackType = {

};

export const PopupActionEditPack: FC<PopupActionEditPackType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {isPopup} = useAppSelector(state => state.main);
  const onClickPopupEditPack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.EditPack, isPopup: !isPopup.isPopupEditPack}))
  }, [isPopup.isPopupEditPack])
  return (
    <PopupAction
      title={'Edit pack'}
      isPopup={isPopup.isPopupEditPack}
      onClickPopup={onClickPopupEditPack}
    >
      <ContentEditPack/>
    </PopupAction>
  );
})
