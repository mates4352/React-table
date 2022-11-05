import React, {FC, memo} from 'react';
import s from './Table-my-page-pack.module.scss';
import {cardType} from "../../../features/main/common/page-pack/Page-pack-type";
import classNames from "classnames";
import {Actions} from "../actions/Actions";
import {TypeButtonAction} from "../../../utils/enum/type-button-action";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {
  addIdCard,
  changeIsSortCards,
  setPopup,
  sortCards
} from "../../../features/main/common/page-pack/Page-pack-slice";
import {PopupCard} from "../../../utils/enum/popup";
import {ButtonFilterTableDate} from "../../bll/button-filter-table-date/Button-filter-table-date";
import {Rating} from "@mui/material";
import {updateRating} from "../../../features/main/Main-thunk";
import {getPackCards} from "../../../features/main/common/page-pack/Page-pack-thunk";
import {useParams} from "react-router-dom";

type TableMyPagePackType = {
  className: string
  cards: Array<cardType>
};

export const TableMyPagePack: FC<TableMyPagePackType> = memo(({
  className,
  cards
}) => {
  const dispatch = useAppDispatch();
  const params = useParams<{id: string}>()
  const {isPopup, isSortCards, page, pageCount} = useAppSelector(state => state.pagePack)
  const {_id} = useAppSelector(state => state.app.user)

  const onClickButtonDelete = (idCard: string) => () => {
    dispatch(addIdCard(idCard))
    dispatch(setPopup({isPopup: true, popup: PopupCard.DeleteCard}))
  }

  const onClickButtonEdit = (idCard: string) => () => {
    dispatch(addIdCard(idCard))
    dispatch(setPopup({isPopup: true, popup: PopupCard.EditCard}))
  }

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

        <th className={classNames(s.th, s.thG)}>
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
              if(params.id) {
                dispatch(getPackCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
              }
            }
          }}/></td>

          <td className={classNames(s.td, s.tdG)}>
            <Actions
              showActions={[TypeButtonAction.EDIT, TypeButtonAction.DELETE]}
              onClickButtonDelete={onClickButtonDelete(card._id)}
              onClickButtonEdit={onClickButtonEdit(card._id)}
            />
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
})
