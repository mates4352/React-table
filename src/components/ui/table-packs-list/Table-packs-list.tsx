import React, {FC, memo, useCallback, useEffect} from 'react';
import s from './Table-packs-list.module.scss';
import {Actions} from "../actions/Actions";
import {ButtonFilterTableDate} from "../../bll/button-filter-table-date/Button-filter-table-date";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {CardPacksType} from "../../../features/main/Main-type";
import {TypeButtonAction} from "../../../utils/enum/type-button-action";
import {PopupPack} from "../../../utils/enum/popup";
import classNames from "classnames";
import {
  setCardPacks,
  setIdPack,
  setPopupPack,
  setSortCardPacks
} from "../../../features/main/common/packs-list/Packs-list-slice";
import {getCardsPack} from "../../../features/main/common/packs-list/Packs-list-thunk";
import {useNavigate} from "react-router-dom";
import {Link} from "../../../utils/enum/routing";

type TablePacksListType = {
  className?: string
};

export const TablePacksList: FC<TablePacksListType> = memo(({
  className
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const {cardPacks, sortCardPacks, isPopupPacks, PacksPage, PacksPageCount,} = useAppSelector(state => state.packsList)
  const {_id} = useAppSelector(state => state.app.user)

  const onClickPopupDeletePack = useCallback((idPack: string) => () => {
    dispatch(setPopupPack({popup: PopupPack.DeletePack, isPopup: !isPopupPacks.isPopupDeletePack}))
    dispatch(setIdPack(idPack))
  }, [isPopupPacks.isPopupDeletePack])

  const onClickPopupEditPack = useCallback((idPack: string) => () => {
    dispatch(setPopupPack({popup: PopupPack.EditPack, isPopup: !isPopupPacks.isPopupEditPack}))
    dispatch(setIdPack(idPack))
  }, [isPopupPacks.isPopupEditPack])

  const onClickButtonTeacher = useCallback((idPack: string, idUser?: string) => () =>{
    if(idUser === _id) {
      navigate(Link.PAGE_PACK + '/' + idPack)
    } else {
      navigate(Link.PAGE_FRIENDS_PACK + '/' + idPack)
    }
  }, [])

  useEffect(() => {
    dispatch(getCardsPack({page: PacksPage, pageCount: PacksPageCount}))
  }, [PacksPage, PacksPageCount])

  return (
    <table className={classNames(s.table, s.tableG, className)}>
      <thead className={classNames(s.thead, s.theadG)}>
      <tr className={classNames(s.tr, s.trG)}>
        <th className={classNames(s.th, s.thG)}>
          Name
        </th>

        <th className={classNames(s.th, s.thG)}>
          Cards
        </th>

        <th className={classNames(s.th, s.thG)}>
          <ButtonFilterTableDate onClickButton={async() => {
            await dispatch(setSortCardPacks(!sortCardPacks))
            dispatch(setCardPacks())
          }}>Last Updated</ButtonFilterTableDate>
        </th>

        <th className={classNames(s.th, s.thG)}>
          Created by
        </th>

        <th className={classNames(s.th, s.thG)}>
          Actions
        </th>
      </tr>
      </thead>

      <tbody className={classNames(s.tbody, s.tbodyG)}>
      {cardPacks.map((item: CardPacksType) =>
        <tr className={classNames(s.tr, s.trG)} key={item._id}>
          <td className={classNames(s.td, s.tdG)}>
            <div className={s.tdWrap}>{item.name}</div>
          </td>
          <td className={classNames(s.td, s.tdG)}>{item.cardsCount}</td>
          <td className={classNames(s.td, s.tdG)}>{item.updated.substr(0, 10)}</td>
          <td className={classNames(s.td, s.tdG)}>
            <div className={s.tdWrap}>{item.user_name}</div>
          </td>
          <td className={classNames(s.td, s.tdG)}>
            {item.user_id === _id ?
              <Actions
                showActions={[TypeButtonAction.TEACHER, TypeButtonAction.EDIT, TypeButtonAction.DELETE]}
                onClickButtonDelete={onClickPopupDeletePack(item._id)}
                onClickButtonEdit={onClickPopupEditPack(item._id)}
                onClickButtonTeacher={onClickButtonTeacher(item._id, item.user_id)}
              /> :
              <Actions showActions={[TypeButtonAction.TEACHER]} onClickButtonTeacher={onClickButtonTeacher(item._id)}/>
            }
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
})
