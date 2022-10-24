import React, {FC, memo} from 'react';
import s from './Table-packs-list.module.scss';
import {arrayTable} from "./test-table-data";
import {Actions} from "../actions/Actions";
import {ButtonFilterTableDate} from "../../bll/button-filter-table-date/Button-filter-table-date";

type TablePacksListType = {};

export const TablePacksList: FC<TablePacksListType> = memo(({}) => {
  const second = '18.03.2021'.split('.').reverse().join('.');
  Date.parse(second)
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
      {arrayTable.map((item: any) =>
        <tr className={s.tr}>
          <td className={s.td}>{item.Name}</td>
          <td className={s.td}>{item.Cards}</td>
          <td className={s.td}>{item.LastUpdated}</td>
          <td className={s.td}>{item.Created}</td>
          <td className={s.td}><Actions showActions={item.Actions}/></td>
        </tr>
      )}
      </tbody>
    </table>
  );
})
