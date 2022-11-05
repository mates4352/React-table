import React, {FC, memo, useEffect} from 'react';
import s from './Table-friends-page-pack.module.scss';
import classNames from "classnames";
import {ButtonFilterTableDate} from "../../bll/button-filter-table-date/Button-filter-table-date";
import {cardType} from "../../../features/main/common/page-pack/Page-pack-type";
import {Rating} from "@mui/material";
import {updateRating} from "../../../features/main/Main-thunk";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {getPackFriendsCards} from "../../../features/main/common/page-friends-pack/Page-friends-pack-thunk";
import {changeIsSortCards, sortCards} from "../../../features/main/common/page-friends-pack/Page-friends-pack-slice";

type TableFriendsPagePackType = {
  className: string
};

export const TableFriendsPagePack: FC<TableFriendsPagePackType> = memo(({
  className,
}) => {
  const dispatch = useAppDispatch();
  const {cards, page, pageCount, isSortCards} = useAppSelector(state => state.pagePackFriends)
  const params = useParams<{id: string}>()

  useEffect(() => {
    if(params.id) {
      dispatch(getPackFriendsCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
    }
  }, [page, pageCount])

  return (
    <table className={classNames(s.table, s.tableG, className)}>
      <thead className={classNames(s.thead, s.theadG)}>
      <tr className={classNames(s.tr, s.trG)}>
        <th className={classNames(s.th, s.thG)}>
          Question
        </th>

        <th className={classNames(s.th, s.thG)}>
          Answer
        </th>

        <th className={classNames(s.th, s.thG)}>
          <ButtonFilterTableDate onClickButton={async() => {
            await dispatch(changeIsSortCards(!isSortCards))
            dispatch(sortCards())
          }}>Last Updated</ButtonFilterTableDate>
        </th>

        <th className={classNames(s.th, s.thG)}>
          Grade
        </th>
      </tr>
      </thead>

      <tbody className={classNames(s.tbody, s.tbodyG)}>
      {cards.map((card: cardType) =>
        <tr className={classNames(s.tr, s.trG)} key={card._id}>
          <td className={classNames(s.td, s.tdG)}>{card.question}</td>

          <td className={classNames(s.td, s.tdG)}>{card.answer}</td>

          <td className={classNames(s.td, s.tdG)}>{card.updated.substring(0, 10)}</td>

          <td className={classNames(s.td, s.tdG)}><Rating defaultValue={card.grade} precision={0.5} onChange={async (event, newValue) => {
            if(newValue) {
              await dispatch(updateRating({card_id: card._id, grade: newValue}))
            }
          }}/></td>
        </tr>
      )}
      </tbody>
    </table>
  );
})
