import React, {FC, memo, useCallback} from 'react';
import {PopupAction} from "../../Popup-action";
import {ContentNewCard} from "../../content/content-new-card/Content-new-card";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopup} from "../../../../../features/main/common/page-pack/Page-pack-slice";
import {PopupCard} from "../../../../../utils/enum/popup";

type PopupNewCardType = {

};
export const PopupNewCard: FC<PopupNewCardType> = memo(({}) => {
  const dispatch = useAppDispatch()
  const {isPopup} = useAppSelector(state => state.pagePack)
  const onClosePopup = useCallback( async () => {
    await dispatch(setPopup({popup: PopupCard.NewCard, isPopup: false}))
  }, [])

  return (
    <PopupAction title={'Add new card'} isPopup={isPopup.isPopupAddNewCard} onClickPopup={onClosePopup}>
      <ContentNewCard onClosePopup={onClosePopup}/>
    </PopupAction>
  );
})
