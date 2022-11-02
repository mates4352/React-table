import React, {FC, memo} from 'react';
import s from './Table-my-page-pack.module.scss';
import {cardsType} from "../../../features/main/common/page-pack/Page-pack-type";
import classNames from "classnames";
import {Actions} from "../actions/Actions";
import {TypeButtonAction} from "../../../utils/enum/type-button-action";
import {useAppSelector} from "../../../hooks/useAppSelector";

type TableMyPagePackType = {
  cards: Array<cardsType>
};

export const TableMyPagePack: FC<TableMyPagePackType> = memo(({
  cards
}) => {
  const {_id} = useAppSelector(state => state.app.user)
  return (
    <table className={classNames(s.table, s.tableG)}>
      <thead className={classNames(s.thead, s.theadG)}>
      <tr className={classNames(s.tr, s.trG)}>
        <th className={classNames(s.th, s.thG)}>
          Question
        </th>

        <th className={classNames(s.th, s.thG)}>
          Answer
        </th>

        <th className={classNames(s.th, s.thG)}>
          Last Updated
        </th>

        <th className={classNames(s.th, s.thG)}>
          Grade
        </th>

        <th className={classNames(s.th, s.thG)}>
        </th>
      </tr>
      </thead>

      <tbody className={classNames(s.tbody, s.tbodyG)}>
      {cards.map((card: cardsType) =>
        <tr className={classNames(s.tr, s.trG)} key={card._id}>
          <td className={classNames(s.td, s.tdG)}>{card.question}</td>

          <td className={classNames(s.td, s.tdG)}>{card.answer}</td>

          <td className={classNames(s.td, s.tdG)}>{card.updated.substring(0, 10)}</td>

          <td className={classNames(s.td, s.tdG)}>{card.rating}</td>

          <td className={classNames(s.td, s.tdG)}>
            <Actions
              showActions={[TypeButtonAction.EDIT, TypeButtonAction.DELETE]}
              onClickButtonDelete={() => console.log('hello')}
              onClickButtonEdit={() => console.log('hello')}
            />
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
})
