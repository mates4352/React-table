import React, {FC, memo, useState} from 'react';
import {PopupAction} from "../../Popup-action";
import {ContentNewCard} from "../../content/content-new-card/Content-new-card";

type PopupNewCardType = {

};
export const PopupNewCard: FC<PopupNewCardType> = memo(({}) => {
  const [isPopup, setPopup] = useState<boolean>(false)
  const onClosePopup = () => {
    setPopup(false)
  }

  return (
    <PopupAction title={'Add new card'} isPopup={isPopup} onClickPopup={onClosePopup}>
      <ContentNewCard onClosePopup={onClosePopup}/>
    </PopupAction>
  );
})
