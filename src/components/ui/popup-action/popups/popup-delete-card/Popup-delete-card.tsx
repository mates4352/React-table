import React, {FC, memo} from 'react';
import s from './Popup-delete-card.module.scss';
import {Button} from "../../../../bll/button/Button";
import {PopupAction} from "../../Popup-action";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {setPopup} from "../../../../../features/main/common/page-pack/Page-pack-slice";
import {PopupCard} from "../../../../../utils/enum/popup";
import {useParams} from "react-router-dom";
import {deleteCard, getPackMyCards} from "../../../../../features/main/common/page-pack/Page-pack-thunk";

type PopupDeleteCardType = {};

export const PopupDeleteCard: FC<PopupDeleteCardType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const params = useParams<{id: string}>()
  const {isPopup, page, pageCount, idCard} = useAppSelector(state => state.pagePack)

  const onClickClosePopup = () => {
    dispatch(setPopup({isPopup: false, popup: PopupCard.DeleteCard}))
  }

  const onClickDeleteCard = async () => {
    if(params.id) {
      await dispatch(deleteCard(idCard))
      dispatch(setPopup({isPopup: false, popup: PopupCard.DeleteCard}))
      dispatch(getPackMyCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
    }
  }

  return (
    <PopupAction
      title={'Delete pack'}
      isPopup={isPopup.isPopupDeleteCard}
      onClickPopup={onClickClosePopup}
    >
      <div className={s.content}>
        <p className={s.text}>
          Do you really want to remove <span>Card Name?</span> <br/>  All cards will be deleted.
        </p>

        <Button className={s.button_delete} type={'button'} onClickButton={onClickDeleteCard}>Delete</Button>
      </div>
    </PopupAction>
  );
})
