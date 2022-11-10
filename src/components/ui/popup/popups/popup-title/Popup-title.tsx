import React, {FC, memo} from 'react';
import s from './Popup-title.module.scss';
import {ButtonLinear} from "../../../../bll/button-linear/Button-linear";
import {IconProfile} from "../../../../icons/icon-profile/Icon-profile";
import {IconLogout} from "../../../../icons/icon-logout/Icon-logout";
import {Popup} from "../../Popup";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {IconTeacher} from "../../../../icons/icon-teacher/Icon-teacher";
import {IconDelete} from "../../../../icons/icon-delete/Icon-delete";
import {IconEdit} from "../../../../icons/icon-edit/Icon-edit";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {setPopupPack} from "../../../../../features/main/common/packs-list/Packs-list-slice";
import {PopupPack} from "../../../../../utils/enum/popup";

type PopupTitleType = {
  isPopupTitle: boolean
  onClosePopup: () => void
};

export const PopupTitle: FC<PopupTitleType> = memo(({
  isPopupTitle,
  onClosePopup
}) => {
  const dispatch = useAppDispatch()
  const paramas = useParams<{id: string}>()

  const onClickButtonEdit = () => {
    dispatch(setPopupPack({isPopup: true, popup: PopupPack.EditPack}))
  }

  const onClickButtonDelete = () => {

  }

  const onClickButtonLearn = () => {

  }

  return (
    <Popup
      className={s.popupTitle}
      isPopup={isPopupTitle}
      onClosePopup={onClosePopup}>

      <div className={s.content}>
        <ButtonLinear
          button
          icon={<IconEdit className={s.iconEdit}/>}
          onClickButton={onClickButtonEdit}>
          Edit
        </ButtonLinear>

        <ButtonLinear
          button
          icon={<IconDelete className={s.iconDelete}/>}
          onClickButton={onClickButtonDelete}>
          Delete
        </ButtonLinear>

        <ButtonLinear
          button
          icon={<IconTeacher className={s.iconTeacher}/>}
          onClickButton={onClickButtonLearn}>
          Learn
        </ButtonLinear>
      </div>
    </Popup>
  );
})
