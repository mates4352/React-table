import React, {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import s from './Page-pack.module.scss'
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Link} from "../../../../utils/enum/routing";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {Button} from "../../../../components/bll/button/Button";
import {useParams} from "react-router-dom";
import {getPackCards} from "./Page-pack-thunk";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {PopupNewCard} from "../../../../components/ui/popup-action/popups/popup-new-card/Popup-new-card";
import {TableMyPagePack} from "../../../../components/ui/table-my-page-pack/Table-my-page-pack";
import {setPageCards, setPageCountCards, setPopup} from "./Page-pack-slice";
import {PopupCard} from "../../../../utils/enum/popup";
import {InputSearch} from "../../../../components/bll/inputSearch/InputSearch";
import {Pagination} from "../../../../components/bll/pagination/Pagination";

type PagePackType = {};

export const PagePack: FC<PagePackType> = ({}) => {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const {cards, page, pageCount, packCards} = useAppSelector(state => state.pagePack);
  const [valueInput, setValueInput] = useState<string>('')
  const onChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }
  const onOpenPopup = () => {
    dispatch(setPopup({popup: PopupCard.NewCard, isPopup: true}))
  }

  const onClickButton = useCallback((button: number) => {
    dispatch(setPageCards(button))
  }, [dispatch])

  const onClickSelect = useCallback((option: number) => {
    dispatch(setPageCountCards(option))
  }, [dispatch])


  useEffect(() => {
    if(params.id) dispatch(getPackCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
  }, [dispatch, params.id, page, pageCount])

  return (
    <Container className={s.pagePack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>

      {cards.length === 0 &&
          <div className={s.contentNotCards}>
              <Title className={s.title} type={"h2"}>Name Pack</Title>

              <Caption className={s.caption}>This pack is empty. Click add new card to fill this pack</Caption>
              <Button className={s.buttonAddCard} type={'button'} onClickButton={onOpenPopup}>Add new card</Button>
          </div>
      }

      {cards.length >= 1 &&
          <>
              <div className={s.wrap}>
                  <Title type={'h2'}>My Pack</Title>

                  <Button className={s.buttonAddCard} type={'button'} onClickButton={onOpenPopup}>Add new card</Button>
              </div>

              <InputSearch
                  className={{inputSearch: s.inputSearch}}
                  type={'text'}
                  placeholder={'Provide your text'}
                  title={'Search'}
                  value={valueInput}
                  onChange={onChangeInputSearch}
              />
              <TableMyPagePack className={s.table} cards={cards}/>

              <Pagination
                  page={page}
                  pageCount={pageCount}
                  maxPageNumber={5}
                  pageCurrentCount={packCards.cardsTotalCount}
                  onClickButton={onClickButton}
                  onClickSelect={onClickSelect}
              />
          </>
      }

    <PopupNewCard/>
    </Container>
  );
};
