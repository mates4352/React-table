import React, {FC, memo, useEffect} from 'react';
import s from './Table-packs-list.module.scss';
import {Actions} from "../actions/Actions";
import {ButtonFilterTableDate} from "../../bll/button-filter-table-date/Button-filter-table-date";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {CardPacksType} from "../../../features/main/Main-type";
import {TypeButtonAction} from "../../../utils/enum/type-button-action";
import {getCardsPack} from "../../../features/main/Main-thunk";

type TablePacksListType = {};

export const TablePacksList: FC<TablePacksListType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const {cardPacks} = useAppSelector(state => state.main.packsList)
  const {_id} = useAppSelector(state => state.app.user)
  useEffect(() => {
    dispatch(getCardsPack())
  }, [])

  return (
    <table className={s.table}>
      <thead className={s.thead}>
      <tr className={s.tr}>
        <th className={s.th}>
          Name
        </th>

        <th className={s.th}>
          Cards
        </th>

        <th className={s.th}>
          <ButtonFilterTableDate onClickButton={() => console.log('hello')}>Last Updated</ButtonFilterTableDate>
        </th>

        <th className={s.th}>
          Created by
        </th>

        <th className={s.th}>
          Actions
        </th>
      </tr>
      </thead>

      <tbody className={s.tbody}>
      {cardPacks.map((item: CardPacksType) =>
        <tr className={s.tr} key={item._id}>
          <td className={s.td}>{item.name}</td>
          <td className={s.td}>{item.cardsCount}</td>
          <td className={s.td}>{item.updated}</td>
          <td className={s.td}>{item.user_name}</td>
          <td className={s.td}>
            {item.user_id === _id ?
              <Actions showActions={[TypeButtonAction.TEACHER, TypeButtonAction.EDIT, TypeButtonAction.DELETE]}/>:
              <Actions showActions={[TypeButtonAction.TEACHER]}/>
            }
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
})
