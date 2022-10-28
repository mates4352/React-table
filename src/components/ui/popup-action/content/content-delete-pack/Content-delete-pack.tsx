import React, {FC, memo, useCallback} from 'react';
import s from './Content-delete-pack.module.scss';
import {Button} from "../../../../bll/button/Button";
import classNames from "classnames/bind";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../../hooks/useAppSelector";
import {deletePack, getCardsPack} from "../../../../../features/main/Main-thunk";
import {setPopup} from "../../../../../features/main/Main-slice";
import {PopupPack} from "../../../../../utils/enum/popup";

type ContentDeletePackType = {
  className?: string
};

export const ContentDeletePack: FC<ContentDeletePackType> = memo(({
  className
}) => {
  const dispatch = useAppDispatch();
  const {idPack, isPopup, page, pageCount} = useAppSelector(state => state.main);
  const onClickDeletePack = useCallback(async () => {
    await dispatch(deletePack(idPack))
    dispatch(getCardsPack({page: page, pageCount: pageCount}))
    dispatch(setPopup({popup: PopupPack.DeletePack, isPopup: !isPopup.isPopupDeletePack}))
  }, [dispatch, idPack])

  return (
    <div className={classNames(s.content, className)}>
      <p className={s.text}>
        Do you really want to remove <span>Pack Name?</span> <br/> All cards will be deleted.
      </p>

      <Button className={s.button_delete} type={'button'} onClickButton={onClickDeletePack}>Delete</Button>
    </div>
  );
})
