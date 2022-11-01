import React, {FC, memo, useState} from 'react';
import s from './Pagination.module.scss';
import {PaginationButton} from "../pagination-button/Pagination-button";
import {ButtonPaginationArrow} from "../button-pagination-arrow/Button-pagination-arrow";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {Select} from "../select/Select";
import {setPage} from "../../../features/main/common/packs-list/Packs-list-slice";

type PaginationType = {
  page: number
  maxPageNumber: number
  pageCurrentCount: number
};

export const Pagination: FC<PaginationType> = memo(({
  page,
  maxPageNumber,
  pageCurrentCount
}) => {
  const {pageCount} = useAppSelector(state => state.packsList)
  const [maxNumber, setMaxNumber] = useState<number>(maxPageNumber)
  const dispatch = useAppDispatch();

  const arryButton = [1, 2, 3, 4, 5]

  if(pageCurrentCount > maxNumber) {
    if(maxNumber > 5) {
      for(let i = maxNumber - 4, j = 0; i <= maxNumber; i++, j++) {
        arryButton[j] = i
      }
    }
  }

  return (
    <div className={s.pagination}>
      <div className={s.wrap}>
        <ButtonPaginationArrow classNameIcon={s.iconLeft} onClickButton={() => {
          if(maxNumber > 5) setMaxNumber((value: number) => value -= 1)
        }}/>

        {maxNumber >= 10 &&
            <>
                <PaginationButton
                    className={s.buttonPaginationMax}
                    onClickButton={() => {
                      setMaxNumber((value: number) => value -= 5)
                    }}>
                  {maxNumber - 5}
                </PaginationButton>

                <div className={s.ellipsis}>...</div>
            </>
        }

        <ul className={s.list}>
          {arryButton.map((button: number) =>
            <li className={s.item} key={button}>
              <PaginationButton pageCurrent={page} onClickButton={() => {
                dispatch(setPage(button))
              }}>{button}</PaginationButton>
            </li>
          )}
        </ul>

        <div className={s.ellipsis}>...</div>

        <PaginationButton
          className={s.buttonPaginationMax}
          onClickButton={() => {
            if(pageCurrentCount > maxNumber) setMaxNumber((value: number) => value += 5)
          }}>
          {maxNumber + 1}
        </PaginationButton>

        <ButtonPaginationArrow classNameIcon={s.iconRight} onClickButton={() => {
          if(pageCurrentCount > maxNumber) setMaxNumber((value: number) => value += 1)
        }}/>
      </div>

      <div className={s.showMaxPage}>
        <span className={s.show}>Show</span>

        <Select select={pageCount} options={[10, 15, 20]}/>

        <span className={s.show}>Cards per Page</span>
      </div>
    </div>
  );
})
