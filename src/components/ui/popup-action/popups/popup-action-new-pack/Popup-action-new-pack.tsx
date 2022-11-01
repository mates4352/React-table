import React, {FC, memo, useCallback} from 'react';
import {PopupAction} from "../../Popup-action";
import {ContentNewPack} from "../../content/content-new-pack/Content-new-pack";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {PopupPack} from "../../../../../utils/enum/popup";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopup} from "../../../../../features/main/common/packs-list/Packs-list-slice";

type PopupActionNewPackType = {};

export const PopupActionNewPack: FC<PopupActionNewPackType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {isPopup} = useAppSelector(state => state.packsList);
  const onClickPopupNewPack = useCallback(() => {
    dispatch(setPopup({popup: PopupPack.NewPack, isPopup: !isPopup.isPopupNewPack}))
  }, [isPopup.isPopupNewPack])

  return (
    <PopupAction
      title={'Add new pack'}
      isPopup={isPopup.isPopupNewPack}
      onClickPopup={onClickPopupNewPack}
    >
      <ContentNewPack onClickNewPack={onClickPopupNewPack}/>
    </PopupAction>
  );
})
